package com.sjsu.vansbackend.assignments;


import com.sjsu.vansbackend.grades.GradeDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDTO {
    private Integer id;
    private String name;
    private String dueDate;
    private String problemStatement;
    private Integer score;
    private List<GradeDTO> submission;

    public static AssignmentDTO convertToAssignmentDTO(Assignment assignment) {
        AssignmentDTO assignmentDTO = new AssignmentDTO();
        assignmentDTO.setId(assignment.getId());
        assignmentDTO.setName(assignment.getName());
        assignmentDTO.setDueDate(assignment.getDueDate());
        assignmentDTO.setProblemStatement(assignment.getProblemStatement());
        assignmentDTO.setScore(assignment.getScore());
        assignmentDTO.setSubmission(assignment.getSubmission().stream().map(GradeDTO::convertToGradeDTO).toList());
        return assignmentDTO;
    }
}
