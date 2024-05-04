'use client';
import * as React from 'react';
import Link from 'next/link';
import { CourseType } from '@/types/Course';
import CourseDetailsNavbar from '@/app/components/courseDetails/CourseDetailsNavbar';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/User';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  course: CourseType;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const CourseDetailsHeader = ({ course, role }: Props) => {
  const [professors, setProfessors] = useState<UserType[]>([]);
  const { user } = useAuthUser();
  const { getCourseDetails } = useCourseDetail();

  const getProfessors = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/professor/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      const data: UserType[] = await res.json();
      console.log(data);
      setProfessors(() => data);
    }
  };

  const saveCourseSyllabus = async (username: string) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/course/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        id: course.id,
        professor: username,
        syllabus: course.syllabus,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      console.log('Refreshing');
      await getCourseDetails(course.id.toString());
    }
  };

  useEffect(() => {
    if (role === 'ADMIN') {
      getProfessors();
    }
  }, [course]);

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center'>
        <Link
          className='absolute top-6 mb-3 flex items-center gap-1 rounded-full bg-blue-50 bg-opacity-60 py-2 pl-3 pr-5 text-center text-sm font-medium text-blue-600 backdrop-blur-3xl'
          href={`/${role.toLowerCase()}`}
          aria-current='page'
        >
          <svg
            className='size-4 flex-shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m15 18-6-6 6-6' />
          </svg>
          Back to Courses
        </Link>
        <h3 className='text-2xl font-semibold tracking-tight'>
          {course.courseCode}
        </h3>
        <h2 className='text-5xl font-bold tracking-tight'>{course.name}</h2>
      </div>

      {role === 'ADMIN' ? (
        <div className='mx-auto my-6 flex w-1/2 flex-row items-center justify-between whitespace-nowrap rounded-full border border-gray-200 bg-white px-10 py-4 text-xl font-semibold shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400'>
          Assigned to
          <select
            className='block w-1/2 rounded-full border border-blue-200 px-4 py-3 pe-9 text-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            value={course.professor?.username}
            onChange={(e) => saveCourseSyllabus(e.target.value)}
          >
            {professors &&
              professors.map((professor, index) => (
                <option value={professor.username} key={index}>
                  {professor.name}
                </option>
              ))}
          </select>
        </div>
      ) : (
        <h2 className='mt-2 text-center text-lg font-semibold tracking-tight'>
          By {course?.professor?.name}
        </h2>
      )}
      <div className='my-8'>
        <CourseDetailsNavbar courseId={course.id} role={role} />
      </div>
    </div>
  );
};

export default CourseDetailsHeader;
