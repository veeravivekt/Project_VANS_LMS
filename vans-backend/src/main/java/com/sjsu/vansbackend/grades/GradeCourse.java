package com.sjsu.vansbackend.grades;


import com.sjsu.vansbackend.courses.Course;
import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class GradeCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer grade;

    @ManyToOne
    private ApplicationUser student;

    public GradeCourse(Integer grade, ApplicationUser student) {
        this.grade = grade;
        this.student = student;
    }
}
