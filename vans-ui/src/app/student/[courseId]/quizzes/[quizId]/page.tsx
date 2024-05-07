'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import QuizDetailDashboard from '@/app/components/courseDetails/quizzes/QuizDetailsDashboard';

type Props = {
  params: {
    quizId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <QuizDetailDashboard params={params} role={user.role} />;
};

export default Page;
