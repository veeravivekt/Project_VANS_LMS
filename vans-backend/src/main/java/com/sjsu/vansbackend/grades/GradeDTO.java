package com.sjsu.vansbackend.grades;


import com.sjsu.vansbackend.assignments.AssignmentDTO;
import com.sjsu.vansbackend.courses.Course;
import com.sjsu.vansbackend.courses.CourseDTO;
import com.sjsu.vansbackend.quiz.QuizDTO;
import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import com.sjsu.vansbackend.userAuth.models.ApplicationUserDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@NoArgsConstructor
public class GradeDTO {
    private Integer id;

    private Integer grade;

    private String submittedOn;

    private String status;

    private ApplicationUserDTO student;

    public static GradeDTO convertToGradeDTO(Grade grade) {
        GradeDTO gradeDTO = new GradeDTO();
        gradeDTO.setId(grade.getId());
        gradeDTO.setGrade(grade.getGrade());
        gradeDTO.setSubmittedOn(grade.getSubmittedOn());
        gradeDTO.setStatus(grade.getStatus());
        gradeDTO.setStudent(ApplicationUserDTO.convertToApplicationUserDTO(grade.getStudent()));
        return gradeDTO;
    }
}
