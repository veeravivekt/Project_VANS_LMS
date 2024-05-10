'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import CourseDetailsDashboard from '@/app/components/courseDetails/CourseDetailsDashboard';

type Props = {
  params: {
    courseId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <CourseDetailsDashboard params={params} role={user.role} />;
};

export default Page;
