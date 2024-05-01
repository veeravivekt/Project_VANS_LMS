// @flow
import * as React from 'react';
import { AssignmentType } from '@/types/Assignment';
import QuizCard from '@/app/components/courseDetails/quizzes/QuizCard';
import { QuizType } from '@/types/Quiz';

type Props = {
  quizzes: QuizType[];
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizList = ({ quizzes, role }: Props) => {
  return (
    <div className='-mr-3 flex w-full flex-row flex-wrap justify-center p-8'>
      {quizzes.map((quiz, index) => (
        <div className='w-full pb-5 pr-5 md:w-1/3' key={index}>
          <QuizCard quiz={quiz} role={role} />
        </div>
      ))}
    </div>
  );
};

export default QuizList;
