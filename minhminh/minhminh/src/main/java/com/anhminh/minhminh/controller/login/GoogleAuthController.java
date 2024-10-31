package com.anhminh.minhminh.controller.login;
import com.anhminh.minhminh.exception.ExpiredTokenException;
import com.anhminh.minhminh.module.Users;
import com.anhminh.minhminh.repository.UserRepository;
import com.anhminh.minhminh.service.login.AuthResponse;
import com.anhminh.minhminh.service.login.CreateToken;
import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.jwt.JwtDecoder;

import java.time.Instant;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/oauth2")
public class GoogleAuthController {

    private final UserRepository userRespository;
    private JwtDecoder jwtDecoder; // Giải mã JWT từ token Google
    private final CreateToken createToken;

    @Autowired
    public GoogleAuthController(UserRepository userRespository, JwtDecoder jwtDecoder, CreateToken createToken) {
        this.userRespository = userRespository;
        this.jwtDecoder = jwtDecoder;
        this.createToken = createToken;
    }




    @PostMapping("/callback/google")
    public ResponseEntity<Object> googleLogin(@RequestBody AuthResponse authResponse) {
        try {
            // Giải mã và xác thực token
            OAuth2AccessToken accessToken = validateToken(authResponse.getToken());

            // Lấy thông tin người dùng từ token
            String email = getUserEmailFromToken(accessToken);
            String name = getUserNameFromToken(accessToken);
            String tokenServer = createToken.generateToken(email);
            Optional<Users> existingUser = Optional.ofNullable(userRespository.findByGmail(email));
            if (existingUser.isPresent()) {

                // Đăng nhập người dùng đã tồn tại
                return ResponseEntity.ok(tokenServer);
            } else {
                // Tạo tài khoản mới cho người dùng
                Users newUser = new Users();
                newUser.setGmail(email);
                newUser.setUserName(name);
                // Thiết lập các thông tin bổ sung nếu cần
                userRespository.save(newUser);

                return ResponseEntity.status(HttpStatus.CREATED).body(tokenServer);
            }
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid token");
        }
    }

    private OAuth2AccessToken validateToken(String token) {
        jwtDecoder = JwtDecoders.fromIssuerLocation("https://accounts.google.com");
        Jwt jwt = jwtDecoder.decode(token);

        // Nếu cần, thực hiện thêm kiểm tra (như thời gian hết hạn)
        if (Objects.requireNonNull(jwt.getExpiresAt()).isBefore(Instant.now())) {
            throw new ExpiredTokenException("Token đã hết hạn");
        }
        return new OAuth2AccessToken(OAuth2AccessToken.TokenType.BEARER, token, jwt.getIssuedAt(), jwt.getExpiresAt());
    }

    private String getUserEmailFromToken(OAuth2AccessToken token) {
        String tokenValue = token.getTokenValue();

        // Giải mã JWT và lấy thông tin
        Jwt jwt = jwtDecoder.decode(tokenValue);
        return (String) jwt.getClaims().get("email");
    }

    private String getUserNameFromToken(OAuth2AccessToken token) {
        String tokenValue = token.getTokenValue();

        // Giải mã JWT và lấy thông tin
        Jwt jwt = jwtDecoder.decode(tokenValue);
        return (String) jwt.getClaims().get("name");
    }
}

