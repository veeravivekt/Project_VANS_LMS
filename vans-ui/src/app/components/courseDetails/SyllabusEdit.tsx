'use client';
import * as React from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import './Syllabus.css';
import { useEffect, useState } from 'react';
import syllabus from '@/app/components/courseDetails/Syllabus';
import Syllabus from '@/app/components/courseDetails/Syllabus';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import { useAuthUser } from '@/app/contexts/AuthContext';

type Props = {};
const SyllabusEdit = (props: Props) => {
  const [editing, setEditing] = useState(false);
  const [syllabus, setSyllabus] = useState('');
  const { course, getCourseDetails } = useCourseDetail();
  const { user } = useAuthUser();

  const saveCourseSyllabus = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/course/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        id: course.id,
        professor: course.professor.username,
        syllabus: syllabus,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      console.log('Refreshing');
      setEditing(false);
      await getCourseDetails(course.id.toString());
    }
  };

  useEffect(() => {
    setSyllabus(course.syllabus);
  }, [course]);

  return (
    <div className='w-full'>
      {editing ? (
        <div className='mx-8 my-4'>
          <textarea
            id='hs-textarea-ex-1'
            className='block h-[50svh] w-full rounded-lg border-gray-200 p-4 pb-12 text-lg focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='Ask me anything...'
            value={syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
          ></textarea>
          <div className='flex w-full flex-row justify-center'>
            <button
              type='button'
              className='m-3 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={() => saveCourseSyllabus()}
            >
              <svg
                className='size-3.5 flex-shrink-0'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z'></path>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Syllabus syllabus={course.syllabus} />
          <div className='flex w-full flex-row justify-center'>
            <button
              type='button'
              className='m-3 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={() => setEditing(true)}
            >
              Edit Syllabus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SyllabusEdit;
