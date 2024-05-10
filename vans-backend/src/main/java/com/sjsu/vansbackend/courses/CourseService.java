package com.sjsu.vansbackend.courses;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    //    public void addCourse(Course course) {
    //        courseRepository.save(course);
    //    }

    public CourseDTO getCourseByCourseId(Integer id) {
        if (courseRepository.findCourseById(id).isPresent()) {
            return CourseDTO.convertToCourseDTO(courseRepository.findCourseById(id).get());
        }
        return null;
    }

    public void updateCourse(Course course) {
        courseRepository.save(course);
    }

    public List<CourseDTO> getCourseByProfessorUsername(String username) {
        List<Course> courses = courseRepository.findCoursesByProfessorUsername(username);
        return courses.stream().map(CourseDTO::convertToCourseDTO).toList();
    }

    public List<CourseDTO> getCoursesByParticipantsUsername(String username) {
        List<Course> courses = courseRepository.findCoursesByParticipantsUsername(username);
        return courses.stream().map(CourseDTO::convertToCourseDTO).toList();
    }

    public List<CourseDTO> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream().map(CourseDTO::convertToCourseDTO).toList();
    }

    //    public void deleteCourse(String courseId) {
    //        courseRepository.deleteById(courseId);
    //    }
}
