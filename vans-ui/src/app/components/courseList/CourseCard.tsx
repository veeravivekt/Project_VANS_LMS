'use client';

import * as React from 'react';
import Link from 'next/link';
import { CourseType } from '@/types/Course';

type Props = {
  course: CourseType;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const CourseCard = ({ course, role }: Props) => {
  const getRouteFromCard = () => {
    return `/${role.toLowerCase()}/` + course.id;
  };
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <div className='h-48 p-4 md:p-7'>
        <h3 className='text-xs font-bold text-blue-500'>{course.courseCode}</h3>
        <h3 className='text-lg font-medium text-gray-800 dark:text-white'>
          {course.name}
        </h3>

        <h3 className='text-sm font-medium text-gray-500'>
          {course.professor.name}
        </h3>

        <Link
          className='mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400'
          href={getRouteFromCard()}
        >
          Go to Course
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
      <div className='flex flex-row items-center justify-between rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-neutral-700 dark:bg-neutral-900'>
        <p className='mt-1 text-sm text-gray-700 dark:text-neutral-300'>
          <span className='font-semibold'>{course.term}</span>
        </p>
        {!course.isPublished && (
          <div className='flex flex-row '>
            <p className='h-18 line-clamp-3 overflow-hidden rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white'>
              Not Published
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
