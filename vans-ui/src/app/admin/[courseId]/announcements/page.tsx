'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import CourseDetailsDashboard from '@/app/components/courseDetails/CourseDetailsDashboard';
import Announcements from '@/app/components/courseDetails/assignments/announcements/Announcements';

type Props = {
  params: {
    courseId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <Announcements role={user.role} />;
};

export default Page;
