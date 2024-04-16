package com.sjsu.vansbackend.assignments;

import com.sjsu.vansbackend.courses.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Integer> {
//    List<Assignment> findAssignmentsByCourseId(Integer courseId);
}
