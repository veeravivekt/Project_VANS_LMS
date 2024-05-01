// @flow
import * as React from 'react';
import Submissions from '@/app/components/Submissions';
import AssignmentDetailsHeader from '@/app/components/courseDetails/assignments/AssignmentDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import QuizDetailsHeader from '@/app/components/courseDetails/quizzes/QuizDetailsHeader';

type Props = {
  params: {
    quizId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizSubmissions = ({ params, role }: Props) => {
  const { course } = useCourseDetail();
  const quiz = course.quizzes.find((value) => value.id === +params.quizId);
  return (
    quiz && (
      <div className='flex w-full flex-col items-center'>
        <QuizDetailsHeader quiz={quiz} course={course} role={role} />
        <Submissions
          role={role}
          grades={quiz.submission}
          totalGrade={+quiz.score}
        />
      </div>
    )
  );
};

export default QuizSubmissions;
