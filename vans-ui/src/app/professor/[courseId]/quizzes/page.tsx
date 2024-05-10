'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import QuizDashboard from '@/app/components/courseDetails/quizzes/QuizDashboard';

type Props = {
  params: {
    courseId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const Page = ({ params, role }: Props) => {
  const { user } = useAuthUser();
  return user && <QuizDashboard params={params} role={user.role} />;
};

export default Page;
