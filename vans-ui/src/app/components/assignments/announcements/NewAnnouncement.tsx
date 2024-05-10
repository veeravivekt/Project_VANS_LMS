'use client';
import * as React from 'react';
import { useState } from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  courseId: string;
};
const NewAnnouncement = ({ courseId }: Props) => {
  const [subject, setSubject] = useState<string>('');
  const [announcement, setAnnouncement] = useState<string>('');
  const { user } = useAuthUser();
  const { getCourseDetails } = useCourseDetail();

  const onSave = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/announcement/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        subject,
        announcement,
        courseId,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      console.log('Refreshing');
      await getCourseDetails(courseId);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='absolute right-1/2 top-[90vh] mb-4 inline-flex  translate-x-1/2 items-center gap-x-2 rounded-full border border-transparent bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
        data-hs-overlay='#autoheight-textarea-modal-example'
      >
        Compose Announcement
      </button>

      <div
        id='autoheight-textarea-modal-example'
        className='hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden'
      >
        <div className='m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg'>
          <div className='pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-700/70'>
            <div className='flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700'>
              <h3 className='font-bold text-gray-800 dark:text-white'>
                Post Announcement
              </h3>
              <button
                type='button'
                className='hs-dropdown-toggle inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800'
                data-hs-overlay='#autoheight-textarea-modal-example'
              >
                <span className='sr-only'>Close</span>
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
                  <path d='M18 6 6 18'></path>
                  <path d='m6 6 12 12'></path>
                </svg>
              </button>
            </div>
            <div className='flex min-h-32 flex-col gap-3 overflow-y-auto p-4'>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Subject
                </label>
                <input
                  type='email'
                  id='input-label'
                  className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  placeholder='Rocket Science'
                  value={subject}
                  required={true}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Problem Statement
                </label>
                <textarea
                  id='hs-autoheight-modal-example-textarea'
                  className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  rows={3}
                  placeholder="Well, here's something to let you all know.."
                  value={announcement}
                  required={true}
                  onChange={(e) => setAnnouncement(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className='flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-neutral-700'>
              <button
                type='button'
                className='inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                data-hs-overlay='#autoheight-textarea-modal-example'
              >
                Close
              </button>
              <button
                className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                data-hs-overlay='#autoheight-textarea-modal-example'
                disabled={subject === '' || announcement === ''}
                onClick={() => onSave()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnnouncement;
