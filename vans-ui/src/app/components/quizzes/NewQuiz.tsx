'use client';
import * as React from 'react';
import { useState } from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  courseId: string;
};
const NewQuiz = ({ courseId }: Props) => {
  const [name, setName] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [duration, setDuration] = useState<number>(60);
  const [score, setScore] = useState<number>(100);
  const { user } = useAuthUser();
  const { getCourseDetails } = useCourseDetail();

  const onSave = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/quiz/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        name,
        question,
        dueDate,
        duration: `${duration} mins`,
        score,
        courseId,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
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
        Add Quiz
      </button>

      <div
        id='autoheight-textarea-modal-example'
        className='hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden'
      >
        <div className='m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg'>
          <div className='pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-700/70'>
            <div className='flex items-center justify-between border-b px-4 py-3 dark:border-neutral-700'>
              <h3 className='font-bold text-gray-800 dark:text-white'>
                Add Quiz
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
                  Name
                </label>
                <input
                  type='email'
                  id='input-label'
                  className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  placeholder='Rocket Science'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Question
                </label>
                <textarea
                  id='hs-autoheight-modal-example-textarea'
                  className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  rows={3}
                  placeholder='Well, the problem starts with...'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
              </div>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Held On
                </label>
                <input
                  type='date'
                  id='input-label'
                  className='block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
                  placeholder='Due on'
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Duration (In Minutes)
                </label>
                <div
                  className='rounded-lg bg-gray-100 px-3 py-2 dark:bg-neutral-900'
                  data-hs-input-number=''
                >
                  <div className='flex w-full items-center justify-between gap-x-5'>
                    <div className='grow'>
                      <input
                        className='w-full border-0 bg-transparent p-0 text-gray-800 focus:ring-0 dark:text-white'
                        type='text'
                        data-hs-input-number-input=''
                        value={duration}
                        onChange={(e) => setDuration(+e.target.value)}
                      />
                    </div>
                    <div className='flex items-center justify-end gap-x-1.5'>
                      <button
                        type='button'
                        className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                        data-hs-input-number-decrement=''
                      >
                        <svg
                          className='size-3.5 flex-shrink-0'
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
                          <path d='M5 12h14'></path>
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                        data-hs-input-number-increment=''
                      >
                        <svg
                          className='size-3.5 flex-shrink-0'
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
                          <path d='M5 12h14'></path>
                          <path d='M12 5v14'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <label
                  form='hs-autoheight-modal-example-textarea'
                  className='mb-2 block text-left text-base font-medium dark:text-white'
                >
                  Score
                </label>
                <div
                  className='rounded-lg bg-gray-100 px-3 py-2 dark:bg-neutral-900'
                  data-hs-input-number=''
                >
                  <div className='flex w-full items-center justify-between gap-x-5'>
                    <div className='grow'>
                      <input
                        className='w-full border-0 bg-transparent p-0 text-gray-800 focus:ring-0 dark:text-white'
                        type='text'
                        data-hs-input-number-input=''
                        value={score}
                        onChange={(e) => setScore(+e.target.value)}
                      />
                    </div>
                    <div className='flex items-center justify-end gap-x-1.5'>
                      <button
                        type='button'
                        className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                        data-hs-input-number-decrement=''
                      >
                        <svg
                          className='size-3.5 flex-shrink-0'
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
                          <path d='M5 12h14'></path>
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                        data-hs-input-number-increment=''
                      >
                        <svg
                          className='size-3.5 flex-shrink-0'
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
                          <path d='M5 12h14'></path>
                          <path d='M12 5v14'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
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
                onClick={() => onSave()}
                disabled={name === '' || dueDate === '' || question === ''}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuiz;
