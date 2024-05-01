'use client';
import * as React from 'react';
import { AssignmentType } from '@/types/Assignment';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import { QuizType } from '@/types/Quiz';

type Props = {
  quiz: QuizType;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const QuizCard = ({ quiz, role }: Props) => {
  const { course } = useCourseDetail();
  const path = `/${role.toLowerCase()}/${course.id}/quizzes/${quiz.id}`;
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <div className='p-4 md:p-5'>
        <h3 className='text-lg font-medium text-gray-800 dark:text-white'>
          {quiz.name}
        </h3>
        {/*<p className='mt-2 text-base text-gray-500 dark:text-neutral-400'>*/}
        {/*  {quiz.description}*/}
        {/*</p>*/}
        <Link
          className='mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400'
          href={path}
        >
          Go to quiz
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
            <path d='m9 18 6-6-6-6'></path>
          </svg>
        </Link>
      </div>
      <div className='rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-neutral-700 dark:bg-neutral-900'>
        <p className='mt-1 text-sm text-gray-500 dark:text-neutral-500'>
          Scheduled on{' '}
          <span className='font-semibold'>
            {new Date(quiz.dueDate).toDateString()}
          </span>{' '}
          | <span className='font-semibold'>{quiz.duration}</span>
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
