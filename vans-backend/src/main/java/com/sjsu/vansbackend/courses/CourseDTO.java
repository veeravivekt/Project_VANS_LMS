package com.sjsu.vansbackend.courses;

import com.sjsu.vansbackend.announcements.Announcement;
import com.sjsu.vansbackend.assignments.AssignmentDTO;
import com.sjsu.vansbackend.grades.GradeCourseDTO;
import com.sjsu.vansbackend.quiz.QuizDTO;
import com.sjsu.vansbackend.userAuth.models.ApplicationUserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {
    private Integer id;
    private String name;
    private String description;
    private Boolean isPublished;
    private String syllabus;
    private String term;
    private Boolean isCurrent;
    private String courseCode;
    private ApplicationUserDTO professor;
    private List<ApplicationUserDTO> participants;
    private List<GradeCourseDTO> participantsGrades;
    private List<AssignmentDTO> assignments;
    private List<QuizDTO> quizzes;
    private List<Announcement> announcements;

    public static CourseDTO convertToCourseDTO(Course course) {
        CourseDTO courseDTO = new CourseDTO();
        courseDTO.setId(course.getId());
        courseDTO.setCourseCode(course.getCode());
        courseDTO.setName(course.getName());
        courseDTO.setIsPublished(course.getIsPublished());
        courseDTO.setSyllabus(course.getSyllabus());
        courseDTO.setTerm(course.getTerm());
        courseDTO.setIsCurrent(Objects.equals(course.getTerm().replace("\r", ""), "SPRING24"));
        courseDTO.setProfessor(ApplicationUserDTO.convertToApplicationUserDTO(course.getProfessor()));
        courseDTO.setParticipants(course.getParticipants().stream().map(ApplicationUserDTO::convertToApplicationUserDTO).toList());
        courseDTO.setParticipantsGrades(course.getParticipantsGrades().stream().map(GradeCourseDTO::convertToGradeCourseDTO).toList());
        courseDTO.setAssignments(course.getAssignment().stream().map(AssignmentDTO::convertToAssignmentDTO).toList());
        courseDTO.setQuizzes(course.getQuiz().stream().map(QuizDTO::convertToQuizDTO).toList());
        courseDTO.setAnnouncements(course.getAnnouncement());
        return courseDTO;
    }
}
