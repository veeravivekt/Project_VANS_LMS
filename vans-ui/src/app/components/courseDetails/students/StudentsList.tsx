// @flow
import * as React from 'react';
import { UserType } from '@/types/User';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';
import { useEffect, useState } from 'react';

type Props = {
  students: UserType[];
  grades: {
    id: number;
    grade: string;
    student: string;
  }[];
  label: string;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const StudentsList = ({ students, label, grades, role }: Props) => {
  const { user } = useAuthUser();
  const { course, getCourseDetails } = useCourseDetail();
  const [grade, setGrades] = useState<{
    [key: string]: {
      id: number;
      grade: number;
    };
  }>({});

  useEffect(() => {
    let g: {
      [key: string]: {
        id: number;
        grade: number;
      };
    } = {};
    grades.map((val) => {
      g[val.student] = {
        id: val.id,
        grade: +val.grade,
      };
    });
    setGrades(g);
  }, [students, grades]);

  const updateGrade = (username: string, value: number) => {
    let g: {
      [key: string]: {
        id: number;
        grade: number;
      };
    } = { ...grade };
    g[username].grade = value;
    setGrades(g);
  };

  const onSave = async (username: string) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/grade/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        id: grade[username].id,
        grade: grade[username].grade,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      console.log('Refreshing');
      await getCourseDetails(`${course.id}`);
    }
  };

  return (
    <div className='w-full px-8 py-4'>
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='inline-block min-w-full p-1.5 align-middle'>
            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900'>
              <div className='grid gap-3 border-b border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between dark:border-neutral-700'>
                <div>
                  <h2 className='text-xl font-semibold text-gray-800 dark:text-neutral-200'>
                    {label}
                  </h2>
                </div>
              </div>

              <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
                <thead className='bg-gray-50 dark:bg-neutral-800'>
                  <tr>
                    <th scope='col' className='py-3 pe-6 ps-6 text-start'>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                          Name
                        </span>
                      </div>
                    </th>

                    <th scope='col' className='px-6 py-3 text-start'>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                          Email
                        </span>
                      </div>
                    </th>

                    <th scope='col' className='px-6 py-3 text-start'>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                          Username
                        </span>
                      </div>
                    </th>

                    {role === 'PROFESSOR' && (
                      <th scope='col' className='px-6 py-3 text-start'>
                        <div className='flex items-center gap-x-2'>
                          <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                            Grades
                          </span>
                        </div>
                      </th>
                    )}

                    {/*<th scope='col' className='px-6 py-3 text-start'>*/}
                    {/*  <div className='flex items-center gap-x-2'>*/}
                    {/*    <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>*/}
                    {/*      Status*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    {/*</th>*/}

                    {/*<th scope='col' className='px-6 py-3 text-start'>*/}
                    {/*  <div className='flex items-center gap-x-2'>*/}
                    {/*    <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>*/}
                    {/*      Created*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    {/*</th>*/}

                    {/*<th scope='col' className='px-6 py-3 text-end'></th>*/}
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 bg-gray-50 dark:divide-neutral-700 dark:bg-neutral-900'>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td className='size-px whitespace-nowrap'>
                        <div className='py-3 pe-6 ps-6'>
                          <div className='flex items-center gap-x-3'>
                            <span className='inline-flex size-[38px] items-center justify-center rounded-full bg-blue-500 text-sm font-semibold leading-none text-white'>
                              {student.name
                                .split(' ')
                                .splice(0, 2)
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                            </span>
                            <div className='grow'>
                              <span className='block text-sm font-semibold text-gray-800 dark:text-neutral-200'>
                                {student.name}
                              </span>
                              {/*<span className='block text-sm text-gray-500 dark:text-neutral-500'>*/}
                              {/*  {student.email}*/}
                              {/*</span>*/}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='size-px whitespace-nowrap'>
                        <div className='px-6 py-3'>
                          <span className='text-sm text-gray-800 dark:text-neutral-200'>
                            {student.email}
                          </span>
                        </div>
                      </td>
                      <td className='size-px whitespace-nowrap'>
                        <div className='px-6 py-3'>
                          <span className='text-sm text-gray-800 dark:text-neutral-200'>
                            {student.username}
                          </span>
                        </div>
                      </td>

                      {role === 'PROFESSOR' && (
                        <td className='size-px whitespace-nowrap'>
                          <div className='px-6 py-3'>
                            <span className='text-sm text-gray-800 dark:text-neutral-200'>
                              <input
                                className='w-16 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white'
                                type='number'
                                value={grade[student.username]?.grade}
                                onChange={(e) =>
                                  updateGrade(student.username, +e.target.value)
                                }
                                onBlur={(e) => onSave(student.username)}
                              />
                            </span>
                          </div>
                        </td>
                      )}

                      {/*<td className='size-px whitespace-nowrap'>*/}
                      {/*  <div className='px-6 py-3'>*/}
                      {/*    <span className='inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-1.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-500/10 dark:text-teal-500'>*/}
                      {/*      <svg*/}
                      {/*        className='size-2.5'*/}
                      {/*        xmlns='http://www.w3.org/2000/svg'*/}
                      {/*        width='16'*/}
                      {/*        height='16'*/}
                      {/*        fill='currentColor'*/}
                      {/*        viewBox='0 0 16 16'*/}
                      {/*      >*/}
                      {/*        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />*/}
                      {/*      </svg>*/}
                      {/*      Active*/}
                      {/*    </span>*/}
                      {/*  </div>*/}
                      {/*</td>*/}
                      {/*<td className='size-px whitespace-nowrap'>*/}
                      {/*  <div className='px-6 py-3'>*/}
                      {/*    <span className='text-sm text-gray-500 dark:text-neutral-500'>*/}
                      {/*      28 Dec, 12:12*/}
                      {/*    </span>*/}
                      {/*  </div>*/}
                      {/*</td>*/}
                      {/*<td className='size-px whitespace-nowrap'>*/}
                      {/*  <div className='px-6 py-1.5'>*/}
                      {/*    <a*/}
                      {/*      className='inline-flex items-center gap-x-1 text-sm font-medium text-blue-600 decoration-2 hover:underline dark:text-blue-500'*/}
                      {/*      href='#'*/}
                      {/*    >*/}
                      {/*      Edit*/}
                      {/*    </a>*/}
                      {/*  </div>*/}
                      {/*</td>*/}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
