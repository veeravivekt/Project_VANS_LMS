'use client';
import * as React from 'react';
import Syllabus from '@/app/components/courseDetails/Syllabus';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import { useEffect } from 'react';
import CourseDetailsHeader from '@/app/components/courseDetails/CourseDetailsHeader';
import SyllabusEdit from '@/app/components/courseDetails/SyllabusEdit';
import syllabus from '@/app/components/courseDetails/Syllabus';
import { useAuthUser } from '@/app/contexts/AuthContext';

type Props = {
  params: {
    courseId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const CourseDetailsDashboard = ({ params, role }: Props) => {
  const { course, getCourseDetails } = useCourseDetail();
  const { user } = useAuthUser();

  useEffect(() => {
    getCourseDetails(params.courseId).then(() => {});
  }, []);
  return (
    <div className='flex flex-col items-center'>
      <CourseDetailsHeader course={course} role={role} />
      {role === 'STUDENT' && course.participantsGrades && (
        <div className='rounded-full bg-blue-500 px-3 py-1 text-center text-lg font-semibold'>
          Total Grade:{' '}
          {
            course.participantsGrades.find(
              (val) => val.student === user?.username
            )?.grade
          }
        </div>
      )}
      {role === 'PROFESSOR' ? (
        <SyllabusEdit />
      ) : (
        <Syllabus syllabus={course.syllabus} />
      )}
    </div>
  );
};

export default CourseDetailsDashboard;
