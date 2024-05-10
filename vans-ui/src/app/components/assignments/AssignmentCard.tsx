'use client';
import * as React from 'react';
import { AssignmentType } from '@/types/Assignment';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  assignment: AssignmentType;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const AssignmentCard = ({ assignment, role }: Props) => {
  const { course } = useCourseDetail();
  const path = `/${role.toLowerCase()}/${course.id}/assignments/${assignment.id}`;
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
      <div className='h-36 p-4 md:p-5'>
        <h3 className='text-lg font-medium text-gray-800 dark:text-white'>
          {assignment.name}
        </h3>
        {/*<p className='mt-2 text-base text-gray-500 dark:text-neutral-400'>*/}
        {/*  {assignment.description}*/}
        {/*</p>*/}
        <Link
          className='mt-3 inline-flex items-center gap-x-1 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400'
          href={path}
        >
          Go to assignment
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
        <p className='mt-1 text-sm text-gray-700 dark:text-neutral-300'>
          Due on{' '}
          <span className='font-semibold'>
            {new Date(assignment.dueDate).toDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AssignmentCard;
