package com.anhminh.minhminh.service.login;

public class AuthResponse {
    private final String token;
    private String email;
    private Long userId;

    public AuthResponse(String token, String email) {
        this.token = token;
        this.email = email;
    }

    public AuthResponse(String token, Long userId) {
        this.token = token;
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public Long getUserId() {
        return userId;
    }

    public String getToken() {
        return token;
    }
}
