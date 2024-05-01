package com.sjsu.vansbackend.quiz;

import org.springframework.stereotype.Service;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quiz addQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz updateQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public void deleteQuiz(Integer quizId) {
        quizRepository.deleteById(quizId);
    }

    public Quiz getQuizById(Integer quizId) {
        return quizRepository.findById(quizId).orElse(null);
    }

//    public Quiz getQuizByCourseId(Integer courseId) {
//        return quizRepository.findByCourseId(courseId).get(0);
//    }

}
