'use client';
import React, { createContext, useContext, useState } from 'react';
import { CourseType } from '@/types/Course';
import { useAuthUser } from '@/app/contexts/AuthContext';

const CoursesContext = createContext<{
  courses: CourseType[] | null;
  filters: string[];
  getAllCourses: (filterBy?: string) => Promise<void>;
}>({
  courses: null,
  filters: [],
  getAllCourses: (filterBy?: string) => Promise.resolve(),
});

export const CoursesProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = useAuthUser();
  const [courses, setCourses] = useState<CourseType[] | null>(null);
  const [filters, setFilters] = useState<string[]>([]);

  const getAllCourses = async (filterBy?: string) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    if (user) {
      const res = await fetch(`${domain}/course/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user?.token,
        },
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      } else {
        let data: CourseType[] = await res.json();

        if (user.role === 'STUDENT') {
          data = data.filter((val) => val.isPublished);
        }

        const filteredTerms: string[] = [];
        data.map((val) => {
          if (!filteredTerms.includes(val.term)) {
            filteredTerms.push(val.term);
          }
        });
        setFilters(filteredTerms);
        if (filterBy) {
          setCourses(data.filter((val) => val.term === filterBy));
        } else {
          setCourses(data);
        }
      }
    }
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        filters,
        getAllCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => useContext(CoursesContext);
