'use client';

import * as React from 'react';
import CourseCard from '@/app/components/courseList/CourseCard';
import { CourseType } from '@/types/Course';

type Props = {
  courses: CourseType[];
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};

const CourseList = ({ courses, role }: Props) => {
  return (
    <div className='-mr-3 flex w-full flex-row flex-wrap justify-center px-8 py-4'>
      {courses.length === 0 && (
        <div className='my-32 flex h-full w-full flex-col items-center justify-center'>
          <h2 className='w-full text-center text-2xl font-medium text-gray-800'>
            No courses found
          </h2>
        </div>
      )}
      {courses.map((course, index) => (
        <div className='w-1/3 pb-5 pr-5' key={index}>
          <CourseCard course={course} role={role} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
