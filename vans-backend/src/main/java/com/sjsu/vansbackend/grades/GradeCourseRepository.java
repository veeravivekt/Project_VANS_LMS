package com.sjsu.vansbackend.grades;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeCourseRepository extends JpaRepository<GradeCourse, Integer> {

//    Grade findByAssignmentSubmissionId(Integer assignmentSubmissionId);
//    Grade findByQuizSubmissionId(Integer quizSubmissionId);

}
