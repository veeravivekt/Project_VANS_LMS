package com.sjsu.vansbackend.quiz;

import com.sjsu.vansbackend.courses.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;


    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/add")
    public QuizDTO addQuiz(@RequestBody QuizDAO quizDAO) {
        System.out.println(quizDAO.getCourseId());
        Quiz quiz = quizService.addQuiz(QuizDAO.convertQuizDAOToQuiz(quizDAO));
        courseRepository.findById(String.valueOf(quizDAO.getCourseId())).ifPresent(course -> {
            course.getQuiz().add(quiz);
            courseRepository.save(course);
        });
        return QuizDTO.convertToQuizDTO(quiz);
    }

    @GetMapping("/update")
    public Quiz updateQuiz(Quiz quiz) {
        return quizService.updateQuiz(quiz);
    }

    @GetMapping("/delete/{quizId}")
    public void deleteQuiz(Integer quizId) {
        quizService.deleteQuiz(quizId);
    }

    @GetMapping("/{quizId}")
    public Quiz getQuizById(Integer quizId) {
        return quizService.getQuizById(quizId);
    }

//    @GetMapping("/list/{courseId}")
//    public Quiz getQuizByCourseId(Integer courseId) {
//        return quizService.getQuizByCourseId(courseId);
//    }


}
