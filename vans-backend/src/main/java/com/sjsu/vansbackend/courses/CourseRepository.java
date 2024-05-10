package com.sjsu.vansbackend.courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
//  List<Course> findByProfessorUsername(String username);

    Optional<Course> findCourseById(Integer id);

    List<Course> findCoursesByProfessorUsername(String username);

    List<Course> findCoursesByParticipantsUsername(String username);
}
