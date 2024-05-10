package com.sjsu.vansbackend.assignments;

import com.sjsu.vansbackend.courses.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/assignment")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/add")
    public AssignmentDTO addAssignment(@RequestBody AssignmentDAO assignmentDAO) {
        Assignment assignment = assignmentService.addAssignment(AssignmentDAO.convertAssignmentDAOToAssignment(assignmentDAO));
        courseRepository.findById(String.valueOf(assignmentDAO.getCourseId())).ifPresent(course -> {
            course.getAssignment().add(assignment);
            courseRepository.save(course);
        });
        return AssignmentDTO.convertToAssignmentDTO(assignment);
    }

    @PutMapping("/update")
    public void updateAssignment(@RequestBody Assignment assignment) {
        assignmentService.updateAssignment(assignment);
    }


    @DeleteMapping("/delete/{assignmentId}")
    public void deleteAssignment(@PathVariable Integer assignmentId) {
        assignmentService.deleteAssignment(assignmentId);
    }

    @GetMapping("/{assignmentId}")
    public Assignment getAssignmentById(@PathVariable Integer assignmentId) {
        return assignmentService.getAssignmentById(assignmentId);
    }
//    @GetMapping("/list/{courseId}")
//    public List<Assignment> getAssignmentsByCourseId(@PathVariable Integer courseId) {
//        return assignmentService.getAssignmentsByCourseId(courseId);
//    }

}
