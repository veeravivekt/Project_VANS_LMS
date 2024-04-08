package com.sjsu.vansbackend.courses;

import com.sjsu.vansbackend.announcements.Announcement;
import com.sjsu.vansbackend.assignments.Assignment;
import com.sjsu.vansbackend.grades.Grade;
import com.sjsu.vansbackend.grades.GradeCourse;
import com.sjsu.vansbackend.quiz.Quiz;
import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    private String name;

    private Boolean isPublished;

    @Column(length = 10000)
    private String syllabus;

    private String term;

    @ManyToOne
    private ApplicationUser professor;

    @ManyToMany
    private Set<ApplicationUser> participants;

    @OneToMany
    private Set<GradeCourse> participantsGrades;

    @OneToMany
    private List<Assignment> assignment;

    @OneToMany
    private List<Quiz> quiz;

    @OneToMany
    private List<Announcement> announcement;
}
