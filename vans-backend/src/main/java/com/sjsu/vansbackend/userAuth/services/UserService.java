package com.sjsu.vansbackend.userAuth.services;

import com.sjsu.vansbackend.userAuth.models.ApplicationUserDTO;
import com.sjsu.vansbackend.userAuth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User is not valid"));
    }

    public List<ApplicationUserDTO> getAllProfessors() {
        return userRepository.findAllByRole("PROFESSOR").stream().map(ApplicationUserDTO::convertToApplicationUserDTO).toList();
    }

}
