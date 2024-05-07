'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import QuizSubmissions from '@/app/components/courseDetails/quizzes/submissions/QuizSubmissions';

type Props = {
  params: {
    quizId: string;
  };
};
const Page = ({ params }: Props) => {
  const { user } = useAuthUser();
  return user && <QuizSubmissions params={params} role={user.role} />;
};

export default Page;
