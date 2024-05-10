'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import AssignmentDashboard from '@/app/components/courseDetails/assignments/AssignmentDashboard';

type Props = {
  params: {
    courseId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <AssignmentDashboard params={params} role={user.role} />;
};

export default Page;
