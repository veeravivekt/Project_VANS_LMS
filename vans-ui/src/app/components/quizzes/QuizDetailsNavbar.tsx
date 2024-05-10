'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  quizId: number;
  courseId: number;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};

const QuizDetailsNavbar = ({ quizId, courseId, role }: Props) => {
  const currentRoute = usePathname();

  const routes: {
    route: string;
    label: string;
  }[] = [];

  if (role !== 'STUDENT') {
    routes.push(
      {
        label: 'Questions',
        route: `/${role.toLowerCase()}/${courseId}/quizzes/${quizId}`,
      },
      {
        label: 'Submissions',
        route: `/${role.toLowerCase()}/${courseId}/quizzes/${quizId}/submissions`,
      }
    );
  }

  return (
    currentRoute &&
    routes.length > 0 && (
      <div className='top-0 z-50 flex w-full items-center justify-center'>
        <ul className='flex space-x-2 rounded-full border border-white border-opacity-20 bg-white bg-opacity-20 p-2 backdrop-blur-3xl'>
          {routes.map((route, index) => {
            return currentRoute === route.route ? (
              <li className='flex-auto' key={index}>
                <Link
                  className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-center text-lg font-medium text-white'
                  href={route.route}
                  aria-current='page'
                >
                  {route.label}
                </Link>
              </li>
            ) : (
              <li className='flex-auto' key={index}>
                <Link
                  className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-transparent px-4 py-3 text-center text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-neutral-800 dark:hover:text-blue-500'
                  href={route.route}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default QuizDetailsNavbar;
