'use client';
import * as React from 'react';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import CourseDetailsHeader from '@/app/components/courseDetails/CourseDetailsHeader';
import StudentsList from '@/app/components/courseDetails/students/StudentsList';

type Props = {
  params: {
    courseId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const CourseStudentListDashboard = ({ role }: Props) => {
  const { course } = useCourseDetail();
  return (
    <div className='flex flex-col items-center'>
      <CourseDetailsHeader course={course} role={role} />
      <StudentsList
        students={course.participants}
        grades={course.participantsGrades}
        label={'Students'}
        role={role}
      />
    </div>
  );
};

export default CourseStudentListDashboard;
