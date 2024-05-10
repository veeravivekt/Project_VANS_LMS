package com.sjsu.vansbackend.quiz;

import com.sjsu.vansbackend.grades.Grade;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String dueDate;

    private String duration;

    @Column(length = 10000)
    private String question;

    private Integer score;

    @OneToMany
    private List<Grade> submission;


    public Quiz(String name, String dueDate, String duration, Integer score, String question) {
        this.name = name;
        this.dueDate = dueDate;
        this.duration = duration;
        this.score = score;
        this.question = question;
    }

}

