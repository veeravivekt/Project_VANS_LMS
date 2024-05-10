'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import CourseStudentListDashboard from '@/app/components/courseDetails/students/CourseStudentListDashboard';

type Props = {
  params: {
    courseId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return (
    user && <CourseStudentListDashboard params={params} role={user.role} />
  );
};

export default Page;
