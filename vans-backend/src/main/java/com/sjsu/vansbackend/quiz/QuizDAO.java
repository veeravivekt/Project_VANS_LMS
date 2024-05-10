package com.sjsu.vansbackend.quiz;


import com.sjsu.vansbackend.grades.GradeDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizDAO {
    private String name;
    private String dueDate;
    private String duration;
    private String question;
    private Integer score;
    private Integer courseId;


    public static Quiz convertQuizDAOToQuiz(QuizDAO quizDAO) {
        Quiz quiz = new Quiz();
        quiz.setName(quizDAO.getName());
        quiz.setDueDate(quizDAO.getDueDate());
        quiz.setDuration(quizDAO.getDuration());
        quiz.setQuestion(quizDAO.getQuestion());
        quiz.setScore(quizDAO.getScore());
        quiz.setSubmission(List.of());
        return quiz;
    }
}
