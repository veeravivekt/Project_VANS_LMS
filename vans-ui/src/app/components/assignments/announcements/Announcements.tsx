'use client';
import * as React from 'react';
import CourseDetailsHeader from '@/app/components/courseDetails/CourseDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import NewAnnouncement from '@/app/components/courseDetails/assignments/announcements/NewAnnouncement';

type Props = {
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const Announcements = ({ role }: Props) => {
  const { course, getCourseDetails } = useCourseDetail();

  return (
    <div className='flex flex-col items-center'>
      <CourseDetailsHeader course={course} role={role} />
      <div className='flex w-2/3 flex-col gap-3 px-8'>
        {(!course.announcements || course.announcements.length === 0) && (
          <div className='my-6 text-center text-xl font-semibold text-gray-300 dark:text-neutral-700'>
            No announcements yet
          </div>
        )}
        {course.announcements?.map((announcement, index) => (
          <div
            key={index}
            className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'
          >
            <div className='p-4 md:p-5'>
              <h3 className='text-lg font-bold text-gray-800 dark:text-white'>
                {announcement.subject}
              </h3>
              <p className='mt-2 text-gray-500 dark:text-neutral-400'>
                {announcement.announcement}
              </p>
            </div>
          </div>
        ))}
      </div>
      {role === 'PROFESSOR' && <NewAnnouncement courseId={`${course.id}`} />}
    </div>
  );
};

export default Announcements;
