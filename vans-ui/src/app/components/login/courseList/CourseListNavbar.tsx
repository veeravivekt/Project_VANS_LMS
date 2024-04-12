'use client';

import React, { useEffect, useState } from 'react';
import { useCourses } from '@/app/contexts/CoursesContext';

type Props = {
  showCoursesBy: (filterBy: string) => void;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};

const CourseListNavbar = ({ showCoursesBy, role }: Props) => {
  const [currentRoute, setCurrentRoute] = useState<string>('SPRING24');
  const { filters } = useCourses();
  const [routes, setRoutes] = useState<
    {
      typeEnum: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    console.log(filters);
    setRoutes(
      filters.map((val) => ({
        label: val,
        typeEnum: val,
      }))
    );
  }, [filters]);

  const showCoursesByCurrentRoute = (currentRoute: string) => {
    setCurrentRoute(currentRoute);
    showCoursesBy(currentRoute);
  };

  return (
    <div className='top-0 z-50 flex w-full items-center justify-center'>
      <ul className='flex space-x-2 rounded-full border border-white border-opacity-20 bg-white bg-opacity-20 p-2 backdrop-blur-3xl'>
        {currentRoute &&
          currentRoute &&
          routes.map((route, index) => {
            return currentRoute === route.typeEnum ? (
              <li className='flex-auto' key={index}>
                <div
                  className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-center text-lg font-medium text-white'
                  aria-current='page'
                  onClick={() => showCoursesByCurrentRoute(route.typeEnum)}
                >
                  {route.label}
                </div>
              </li>
            ) : (
              <li className='flex-auto' key={index}>
                <div
                  className='inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent px-4 py-3 text-center text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-neutral-800 dark:hover:text-blue-500'
                  onClick={() => showCoursesByCurrentRoute(route.typeEnum)}
                >
                  {route.label}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CourseListNavbar;
