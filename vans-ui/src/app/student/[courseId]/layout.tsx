'use client';
import React from 'react';
import AuthenticatedRoute from '@/app/AuthenticatedRoute';
import { CoursesProvider } from '@/app/contexts/CoursesContext';
import { CourseDetailsProvider } from '@/app/contexts/CourseDetailContext';

const DashboardLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthenticatedRoute allowedRole={'STUDENT'}>
      <CourseDetailsProvider>{children}</CourseDetailsProvider>
    </AuthenticatedRoute>
  );
};

export default DashboardLayout;
