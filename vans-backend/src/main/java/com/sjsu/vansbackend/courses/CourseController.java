package com.sjsu.vansbackend.courses;

import com.sjsu.vansbackend.userAuth.models.ApplicationUser;
import com.sjsu.vansbackend.userAuth.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/course")
public class CourseController {
    private final CourseService courseService;

    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public CourseController(CourseService courseService, UserRepository userRepository, CourseRepository courseRepository) {
        this.courseService = courseService;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    // Retrieve (GET Request)

    // Get course object based on courseId
    @GetMapping("/{courseId}")
    public CourseDTO getCourseInfo(@PathVariable Integer courseId) {
        return courseService.getCourseByCourseId(courseId);
    }

    // Get all course objects
    @GetMapping("/list")
    public ResponseEntity<List<CourseDTO>> getAllCourses(Principal principal) {
        ApplicationUser user = userRepository.findByUsername(principal.getName()).get();
        List<CourseDTO> courses = switch (user.getRole()) {
            case "PROFESSOR" -> courseService.getCourseByProfessorUsername(user.getUsername());
            case "STUDENT" -> courseService.getCoursesByParticipantsUsername(user.getUsername());
            default -> courseService.getAllCourses();
        };
        return ResponseEntity.ok(courses);
    }

    @PostMapping("/update")
    public CourseDTO updateCourse(@RequestBody CourseDAO courseDAO) {
        Course course = courseRepository.findCourseById(courseDAO.getId()).get();
        course.setProfessor(userRepository.findByUsername(courseDAO.getProfessor()).get());
        course.setSyllabus(courseDAO.getSyllabus());
        courseRepository.save(course);
        return CourseDTO.convertToCourseDTO(course);
    }
}
