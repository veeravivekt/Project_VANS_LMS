package com.sjsu.vansbackend.userAuth.models;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationUserDTO {
    private String username;
    private String role;
    private String name;
    @Column(unique = true)
    private String email;

    public static ApplicationUserDTO convertToApplicationUserDTO(ApplicationUser applicationUser) {
        ApplicationUserDTO applicationUserDTO = new ApplicationUserDTO();
        applicationUserDTO.setUsername(applicationUser.getUsername());
        applicationUserDTO.setRole(applicationUser.getRole());
        applicationUserDTO.setName(applicationUser.getName());
        applicationUserDTO.setEmail(applicationUser.getEmail());
        return applicationUserDTO;
    }
}
