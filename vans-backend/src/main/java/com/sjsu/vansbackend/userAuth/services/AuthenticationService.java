package com.sjsu.vansbackend.userAuth.services;


import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import com.sjsu.vansbackend.userAuth.models.LoginResponseDTO;
import com.sjsu.vansbackend.userAuth.models.RegistrationDTO;
import com.sjsu.vansbackend.userAuth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public LoginResponseDTO registerUser(RegistrationDTO registrationDTO) throws AuthenticationException {
        String encodedPassword = passwordEncoder.encode(registrationDTO.getPassword());

        // Save the user with the provided username, encoded password, and authorities
        ApplicationUser user = userRepository.save(new ApplicationUser(registrationDTO.getUsername(), encodedPassword, registrationDTO.getName(), registrationDTO.getEmail(), registrationDTO.getRole()));
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(registrationDTO.getUsername(), registrationDTO.getPassword())
        );

        String token = tokenService.generateJwt(auth);
        return new LoginResponseDTO(user.getUsername(), user.getRole(), user.getName(), user.getEmail(), token);

    }

    public LoginResponseDTO loginUser(String username, String password) throws AuthenticationException {

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );

        String token = tokenService.generateJwt(auth);
        ApplicationUser user = userRepository.findByUsername(username).get();

        return new LoginResponseDTO(user.getUsername(), user.getRole(), user.getName(), user.getEmail(), token);
    }

}
