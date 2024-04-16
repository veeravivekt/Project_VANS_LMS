package com.sjsu.vansbackend.assignments;

import com.sjsu.vansbackend.grades.Grade;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String dueDate;


    @Column(length = 10000)
    private String problemStatement;

    private Integer score;

    @OneToMany
    private List<Grade> submission;

    public Assignment(String name, String dueDate, String problemStatement, Integer score) {
        this.name = name;
        this.dueDate = dueDate;
        this.problemStatement = problemStatement;
        this.score = score;
    }

}
