package com.sjsu.vansbackend.userAuth.controllers;

import com.sjsu.vansbackend.userAuth.models.ApplicationUserDTO;
import com.sjsu.vansbackend.userAuth.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/professor")
@CrossOrigin("*")
public class FacultyController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<ApplicationUserDTO> getAllProfessors() {
        return userService.getAllProfessors();
    }
}
