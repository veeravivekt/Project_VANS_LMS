package com.sjsu.vansbackend.grades;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/grade")
public class GradeController {

    private final GradeService gradeService;

    private final GradeCourseRepository gradeCourseRepository;

    public GradeController(GradeService gradeService, GradeCourseRepository gradeCourseRepository) {
        this.gradeService = gradeService;
        this.gradeCourseRepository = gradeCourseRepository;
    }

    @GetMapping("/add")
    public Grade addGrade(Grade grade) {
        return gradeService.addGrade(grade);
    }


    @GetMapping("/{gradeId}")
    public Grade getGradeById(@PathVariable Integer gradeId) {
        return gradeService.getGradeById(gradeId);
    }

//    @GetMapping("/{assignmentSubmissionId}")
//    public Grade getGradeByAssignmentSubmissionId(@PathVariable Integer assignmentSubmissionId) {
//        return gradeService.getGradeByAssignmentSubmissionId(assignmentSubmissionId);
//    }
//
//    @GetMapping("/{quizSubmissionId}")
//    public Grade getGradeByQuizSubmissionId(@PathVariable Integer quizSubmissionId) {
//        return gradeService.getGradeByQuizSubmissionId(quizSubmissionId);
//    }

    @PostMapping("/update")
    public GradeCourseDTO updateGrade(@RequestBody GradeCourseDAO gradeCourseDAO) {
        GradeCourse gradeCourse = gradeCourseRepository.findById(gradeCourseDAO.getId()).get();
        gradeCourse.setGrade(gradeCourseDAO.getGrade());
        gradeCourseRepository.save(gradeCourse);
        return GradeCourseDTO.convertToGradeCourseDTO(gradeCourse);
    }
}
