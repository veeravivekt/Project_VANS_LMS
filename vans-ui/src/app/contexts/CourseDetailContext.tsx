'use client';
import React, { createContext, useContext, useState } from 'react';
import { CourseType } from '@/types/Course';
import { useAuthUser } from '@/app/contexts/AuthContext';

const CourseDetailContext = createContext<{
  course: CourseType;
  getCourseDetails: (courseId: string) => Promise<void>;
}>({
  course: {} as CourseType,
  getCourseDetails: (courseId: string) => Promise.resolve(),
});

export const CourseDetailsProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useAuthUser();
  const [course, setCourse] = useState<CourseType>({} as CourseType);

  const getCourseDetails = async (courseId: string) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    if (user) {
      const res = await fetch(`${domain}/course/${courseId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user?.token,
        },
        cache: 'no-cache',
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      } else {
        const data: CourseType = await res.json();
        setCourse(data);
      }
    }
  };

  return (
    <CourseDetailContext.Provider
      value={{
        course,
        getCourseDetails,
      }}
    >
      {children}
    </CourseDetailContext.Provider>
  );
};

export const useCourseDetail = () => useContext(CourseDetailContext);
