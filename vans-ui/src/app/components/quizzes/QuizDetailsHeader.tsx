'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AssignmentDetailsNavbar from '@/app/components/courseDetails/assignments/AssignmentDetailsNavbar';
import { AssignmentType } from '@/types/Assignment';
import { CourseType } from '@/types/Course';
import QuizDetailsNavbar from '@/app/components/courseDetails/quizzes/QuizDetailsNavbar';
import { QuizType } from '@/types/Quiz';

type Props = {
  quiz: QuizType;
  course: CourseType;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizDetailsHeader = ({ quiz, role, course }: Props) => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <Link
          className='absolute top-6 mb-3 flex items-center gap-1 rounded-full bg-blue-50 bg-opacity-60 py-2 pl-3 pr-5 text-center text-sm font-medium text-blue-600 backdrop-blur-3xl'
          href={`/${role.toLowerCase()}/${course.id}/quizzes`}
          aria-current='page'
        >
          <svg
            className='size-4 flex-shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m15 18-6-6 6-6' />
          </svg>
          Back to Quizzes
        </Link>
        <h3 className='text-center text-2xl font-semibold tracking-tight'>
          {course.courseCode}
        </h3>
        <h2 className='text-center text-5xl font-bold tracking-tight'>
          {quiz.name}
        </h2>
      </div>
      {/*<h3 className='mt-3 text-center text-xl font-medium tracking-tight text-opacity-70'>*/}
      {/*  {assignment.description}*/}
      {/*</h3>*/}
      <div className='my-8'>
        <QuizDetailsNavbar quizId={quiz.id} courseId={course.id} role={role} />
      </div>
    </div>
  );
};

export default QuizDetailsHeader;
