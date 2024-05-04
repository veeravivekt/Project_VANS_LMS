package com.sjsu.vansbackend.grades;

import com.sjsu.vansbackend.userAuth.models.ApplicationUserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GradeCourseDTO {

    private Integer id;

    private Integer grade;

    private String student;

    public static GradeCourseDTO convertToGradeCourseDTO(GradeCourse gradeCourse) {
        GradeCourseDTO gradeCourseDTO = new GradeCourseDTO();
        gradeCourseDTO.setId(gradeCourse.getId());
        gradeCourseDTO.setGrade(gradeCourse.getGrade());
        gradeCourseDTO.setStudent(gradeCourse.getStudent().getUsername());
        return gradeCourseDTO;
    }
}
