'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import AssignmentSubmissions from '@/app/components/courseDetails/assignments/submissions/AssignmentSubmissions';

type Props = {
  params: {
    assignmentId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <AssignmentSubmissions params={params} role={user.role} />;
};

export default Page;
