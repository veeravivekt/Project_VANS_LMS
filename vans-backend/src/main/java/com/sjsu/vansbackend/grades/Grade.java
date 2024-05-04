package com.sjsu.vansbackend.grades;


import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer grade;
    private String submittedOn;

    private String status;
    @ManyToOne
    private ApplicationUser student;

    public Grade(Integer grade, String submittedOn, String status, ApplicationUser student) {
        this.grade = grade;
        this.submittedOn = submittedOn;
        this.status = status;
        this.student = student;
    }
}
