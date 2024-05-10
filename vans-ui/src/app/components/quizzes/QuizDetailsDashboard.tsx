import * as React from 'react';
import Syllabus from '@/app/components/courseDetails/Syllabus';
import QuizDetailsHeader from '@/app/components/courseDetails/quizzes/QuizDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  params: {
    quizId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizDetailDashboard = ({ params, role }: Props) => {
  const { course } = useCourseDetail();
  const quiz = course.quizzes.find((value) => value.id === +params.quizId);
  return (
    quiz && (
      <div className='flex w-full flex-col items-center'>
        <QuizDetailsHeader quiz={quiz} course={course} role={role} />
        <Syllabus syllabus={quiz.question} />
      </div>
    )
  );
};

export default QuizDetailDashboard;
