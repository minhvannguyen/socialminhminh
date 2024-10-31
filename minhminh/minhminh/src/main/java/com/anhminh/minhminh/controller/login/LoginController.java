package com.anhminh.minhminh.controller.login;


import com.anhminh.minhminh.service.login.AuthRequest;
import com.anhminh.minhminh.service.login.AuthResponse;
import com.anhminh.minhminh.service.login.CreateToken;
import com.anhminh.minhminh.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final LoginService loginService;
    private final CreateToken createToken;
    @Autowired
    public LoginController(CreateToken createToken, LoginService loginService) {
        this.createToken = createToken;
        this.loginService = loginService;
    }


    @PostMapping
    public ResponseEntity<Object> login(@RequestBody AuthRequest authRequest) {
        // Xác thực user bằng cách kiểm tra username và password
        if (loginService.validateUser(authRequest.getGmail(), authRequest.getPassword())) {
            String token = createToken.generateToken(authRequest.getGmail());
            return ResponseEntity.ok(new AuthResponse(token));
        } else {
            return ResponseEntity.status(401).body("Tài khoản hoặc mật khẩu không đúng!");
        }
    }
}
