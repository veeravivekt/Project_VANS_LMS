'use client';
import * as React from 'react';
import CourseDetailsHeader from '@/app/components/courseDetails/CourseDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import QuizList from '@/app/components/courseDetails/quizzes/QuizList';
import NewQuiz from '@/app/components/courseDetails/quizzes/NewQuiz';

type Props = {
  params: {
    courseId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizDashboard = ({ params, role }: Props) => {
  const { course } = useCourseDetail();

  return (
    <div className='flex w-full flex-col items-center'>
      <CourseDetailsHeader course={course} role={role} />
      {role === 'PROFESSOR' && (
        <h3 className='mt-3 w-full px-8 text-center text-xl font-medium tracking-tight text-opacity-70'>
          <NewQuiz courseId={params.courseId} />
        </h3>
      )}
      <QuizList quizzes={course.quizzes} role={role} />
    </div>
  );
};

export default QuizDashboard;
