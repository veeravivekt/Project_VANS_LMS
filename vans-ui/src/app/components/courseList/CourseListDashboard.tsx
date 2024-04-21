'use client';
import React, { useEffect } from 'react';
import CourseList from '@/app/components/courseList/CourseList';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useCourses } from '@/app/contexts/CoursesContext';
import CourseListHeader from '@/app/components/courseList/CourseListHeader';

const CourseListDashboard = () => {
  const { courses, getAllCourses } = useCourses();
  const { user } = useAuthUser();

  useEffect(() => {
    showCoursesBy('SPRING24').then(() => {});
  }, []);

  const showCoursesBy = async (filterBy: string) => {
    await getAllCourses(filterBy);
  };

  return (
    user &&
    courses && (
      <div className='flex flex-col items-center'>
        <CourseListHeader showCoursesBy={showCoursesBy} role={user?.role} />
        <CourseList courses={courses} role={user?.role} />
      </div>
    )
  );
};
export default CourseListDashboard;
