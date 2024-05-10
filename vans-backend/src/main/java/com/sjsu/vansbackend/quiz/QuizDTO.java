package com.sjsu.vansbackend.quiz;


import com.sjsu.vansbackend.grades.GradeDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizDTO {
    private Integer id;
    private String name;
    private String dueDate;
    private String duration;
    private String question;
    private Integer score;
    private List<GradeDTO> submission;


    public static QuizDTO convertToQuizDTO(Quiz quiz) {
        QuizDTO quizDTO = new QuizDTO();
        quizDTO.setId(quiz.getId());
        quizDTO.setName(quiz.getName());
        quizDTO.setDueDate(quiz.getDueDate());
        quizDTO.setDuration(quiz.getDuration());
        quizDTO.setQuestion(quiz.getQuestion());
        quizDTO.setScore(quiz.getScore());
        quizDTO.setSubmission(quiz.getSubmission().stream().map(GradeDTO::convertToGradeDTO).toList());
        return quizDTO;
    }
}
