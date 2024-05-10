package com.sjsu.vansbackend.assignments;

import com.sjsu.vansbackend.courses.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {

    @Autowired
    AssignmentRepository assignmentRepository;

    public Assignment addAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    public void updateAssignment(Assignment assignment) {
        assignmentRepository.save(assignment);
    }

    public void deleteAssignment(Integer assignmentId) {
        assignmentRepository.deleteById(assignmentId);
    }

    public Assignment getAssignmentById(Integer assignmentId) {
        return assignmentRepository.findById(assignmentId).orElse(null); // findbyid is by default, no need to create a method in repository. and its optional
    }



}


