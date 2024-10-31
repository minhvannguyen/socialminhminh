package com.anhminh.minhminh.service.login;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class CreateToken {

    public String generateToken(String username) {
        // Thay bằng secret key của bạn

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Token hết hạn sau 10 giờ
                .signWith(SignatureAlgorithm.HS256, "minh2121")
                .compact();
    }
}
