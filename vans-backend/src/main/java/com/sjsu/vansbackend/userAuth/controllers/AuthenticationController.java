package com.sjsu.vansbackend.userAuth.controllers;

import com.sjsu.vansbackend.userAuth.models.LoginDTO;
import com.sjsu.vansbackend.userAuth.models.LoginResponseDTO;
import com.sjsu.vansbackend.userAuth.models.RegistrationDTO;
import com.sjsu.vansbackend.userAuth.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<LoginResponseDTO> registerUser(@RequestBody RegistrationDTO body) {
        try {
            LoginResponseDTO loginResponseDTO = authenticationService.registerUser(body);
            return ResponseEntity.ok(loginResponseDTO);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginUser(@RequestBody LoginDTO body) {
        try {
            LoginResponseDTO loginResponseDTO = authenticationService.loginUser(body.getUsername(), body.getPassword());
            return ResponseEntity.ok(loginResponseDTO);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
    }
}   
