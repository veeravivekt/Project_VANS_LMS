'use client';
import * as React from 'react';
import AssignmentList from '@/app/components/courseDetails/assignments/AssignmentList';
import CourseDetailsHeader from '@/app/components/courseDetails/CourseDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import NewAssignment from '@/app/components/courseDetails/assignments/NewAssignment';

type Props = {
  params: {
    courseId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const AssignmentDashboard = ({ params, role }: Props) => {
  const { course } = useCourseDetail();

  return (
    <div className='flex w-full flex-col items-center'>
      <CourseDetailsHeader course={course} role={role} />
      {role === 'PROFESSOR' && (
        <h3 className='mt-3 w-full px-8 text-center text-xl font-medium tracking-tight text-opacity-70'>
          <NewAssignment courseId={params.courseId} />
        </h3>
      )}
      <AssignmentList assignments={course.assignments} role={role} />
    </div>
  );
};

export default AssignmentDashboard;
