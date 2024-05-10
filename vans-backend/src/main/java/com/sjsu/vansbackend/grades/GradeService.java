package com.sjsu.vansbackend.grades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeService {
    @Autowired
    GradeRepository gradeRepository;

    public Grade addGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public void updateGrade(Grade grade) {
        gradeRepository.save(grade);
    }




    public Grade getGradeById(Integer gradeId) {
        return gradeRepository.findById(gradeId).orElse(null);
    }
//    public Grade getGradeByAssignmentSubmissionId(Integer assignmentSubmissionId) {
//        return gradeRepository.findByAssignmentSubmissionId(assignmentSubmissionId);
//    }
//
//    public Grade getGradeByQuizSubmissionId(Integer quizSubmissionId) {
//        return gradeRepository.findByQuizSubmissionId(quizSubmissionId);
//    }
}
