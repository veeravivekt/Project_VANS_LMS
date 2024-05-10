'use client';

import React from 'react';
import AuthenticatedRoute from '@/app/AuthenticatedRoute';
import { CoursesProvider } from '@/app/contexts/CoursesContext';

const DashboardLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthenticatedRoute allowedRole={'STUDENT'}>
      <CoursesProvider>
        <div className='flex w-full flex-col items-center pb-10'>
          <div className='w-full'>{children} </div>
        </div>
      </CoursesProvider>
    </AuthenticatedRoute>
  );
};

export default DashboardLayout;
