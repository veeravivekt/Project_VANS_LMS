package com.sjsu.vansbackend.assignments;


import com.sjsu.vansbackend.grades.GradeDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDAO {
    private String name;
    private String dueDate;
    private String problemStatement;
    private Integer score;
    private Integer courseId;

    public static Assignment convertAssignmentDAOToAssignment(AssignmentDAO assignmentDAO) {
        Assignment assignment = new Assignment();
        assignment.setName(assignmentDAO.getName());
        assignment.setDueDate(assignmentDAO.getDueDate());
        assignment.setProblemStatement(assignmentDAO.getProblemStatement());
        assignment.setScore(assignmentDAO.getScore());
        assignment.setSubmission(List.of());
        return assignment;
    }
}
