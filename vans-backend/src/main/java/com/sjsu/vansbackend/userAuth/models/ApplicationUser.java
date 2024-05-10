package com.sjsu.vansbackend.userAuth.models;

import com.sjsu.vansbackend.courses.Course;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class ApplicationUser implements UserDetails {

    @Id
    @Column(unique = true)
    private String username;

    private String password;

    private String role;

    private String name;

    @Column(unique = true)
    private String email;

//    @OneToMany(mappedBy = "professor")
//    private Set<Course> taughtCourses = new HashSet<>(); // Courses taught by this user (professor)
//
//    @ManyToMany(mappedBy = "participants")
//    private Set<Course> enrolledCourses = new HashSet<>(); // Courses enrolled by this user (student)

    public ApplicationUser() {
        super();
    }

    public ApplicationUser(String username, String password, String name, String  email, String role) {
        super();
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return List.of(() -> this.role);
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return this.password;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return this.username;
    }

    /* If you want account locking capabilities create variables and ways to set them for the methods below */
    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

}
