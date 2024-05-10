// @flow
import * as React from 'react';
import { GradeType } from '@/types/Grade';

type Props = {
  grades: GradeType[];
  totalGrade: number;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const Submissions = ({ grades, role, totalGrade }: Props) => {
  return (
    <div className='w-full px-8 py-4'>
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='inline-block min-w-full p-1.5 align-middle'>
            <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900'>
              <div className='grid gap-3 border-b border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between dark:border-neutral-700'>
                <div>
                  <h2 className='text-xl font-semibold text-gray-800 dark:text-neutral-200'>
                    Submissions
                  </h2>
                </div>
                <div>
                  <h2 className='text-base font-semibold text-gray-600 dark:text-neutral-400'>
                    {grades.length} Submissions
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

                    <th scope='col' className='px-6 py-3 text-start'>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                          Submitted On
                        </span>
                      </div>
                    </th>

                    {role === 'PROFESSOR' && (
                      <th scope='col' className='px-6 py-3 text-start'>
                        <div className='flex items-center gap-x-2'>
                          <span className='text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200'>
                            Grade
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
                  {grades.map((grade, index) => (
                    <tr key={index}>
                      <td className='size-px whitespace-nowrap'>
                        <div className='py-3 pe-6 ps-6'>
                          <div className='flex items-center gap-x-3'>
                            <span className='inline-flex size-[38px] items-center justify-center rounded-full bg-blue-500 text-sm font-semibold leading-none text-white'>
                              {grade.student.name
                                .split(' ')
                                .splice(0, 2)
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                            </span>
                            <div className='grow'>
                              <span className='block text-sm font-semibold text-gray-800 dark:text-neutral-200'>
                                {grade.student.name}
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
                            {grade.student.email}
                          </span>
                        </div>
                      </td>
                      <td className='size-px whitespace-nowrap'>
                        <div className='px-6 py-3'>
                          <span className='text-sm text-gray-800 dark:text-neutral-200'>
                            {grade.student.username}
                          </span>
                        </div>
                      </td>
                      <td className='size-px whitespace-nowrap'>
                        <div className='px-6 py-3'>
                          <span className='text-sm text-gray-800 dark:text-neutral-200'>
                            {new Date(grade.submittedOn).toDateString()}
                          </span>
                        </div>
                      </td>

                      {role === 'PROFESSOR' && (
                        <td className='size-px whitespace-nowrap'>
                          <div className='px-6 py-3'>
                            <span className='text-sm text-gray-800 dark:text-neutral-200'>
                              {grade.grade}/{totalGrade}
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

export default Submissions;
