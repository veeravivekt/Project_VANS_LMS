package com.sjsu.vansbackend.userAuth.models;

import lombok.Data;

@Data
public class LoginResponseDTO {
    private String username;
    private String role;
    private String token;
    private String name;
    private String email;

    public LoginResponseDTO() {
        super();
    }

    public LoginResponseDTO(String username, String role, String name, String email, String token) {
        super();
        this.username = username;
        this.role = role;
        this.name = name;
        this.email = email;
        this.token = token;
    }
}
