'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import AssignmentDetailDashboard from '@/app/components/courseDetails/assignments/AssignmentDetailDashboard';

type Props = {
  params: {
    assignmentId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <AssignmentDetailDashboard params={params} role={user.role} />;
};

export default Page;
