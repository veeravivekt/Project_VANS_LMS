'use client';
import * as React from 'react';
import CourseDetailsDashboard from '@/app/components/courseDetails/CourseDetailsDashboard';
import { useAuthUser } from '@/app/contexts/AuthContext';

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
