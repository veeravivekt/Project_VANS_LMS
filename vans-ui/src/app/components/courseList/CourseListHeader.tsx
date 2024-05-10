'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import CourseListNavbar from '@/app/components/courseList/CourseListNavbar';
import { useCourses } from '@/app/contexts/CoursesContext';

type Props = {
  showCoursesBy: (filterBy: string) => void;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const CourseListHeader = ({ showCoursesBy, role }: Props) => {
  const { user } = useAuthUser();
  const { filters } = useCourses();

  const getGreetingByTime = (): string => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <h3 className='text-lg font-semibold tracking-tight'>
          {getGreetingByTime()}
        </h3>
        <h2 className='text-5xl font-bold tracking-tight'>{user?.name}</h2>
        <h3 className='mt-2 text-center text-base font-medium tracking-tight text-opacity-70'>
          All the courses you have ever taken, including current ones
        </h3>
      </div>
      {filters.length > 0 && (
        <div className='my-8'>
          <CourseListNavbar showCoursesBy={showCoursesBy} role={role} />
        </div>
      )}
    </div>
  );
};

export default CourseListHeader;
