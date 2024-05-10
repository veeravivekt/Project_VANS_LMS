'use client';
import * as React from 'react';
import Link from 'next/link';
import { useAuthUser } from '@/app/contexts/AuthContext';

const HomeNavbar = () => {
  const { user, logout } = useAuthUser();

  const handleLogout = () => {
    setTimeout(() => {
      logout();
    }, 100);
  };
  return (
    <header className='flex w-full flex-wrap py-4 text-sm sm:flex-nowrap sm:justify-start'>
      <nav
        className='w-full px-8 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            className='flex items-center gap-x-2 whitespace-nowrap text-xl font-semibold dark:text-white'
            href={'/login'}
          >
            Project VANS{' '}
            {user && (
              <div className='mb-0.5 rounded-full border border-white border-opacity-30 bg-white bg-opacity-20 px-3 py-1 text-sm font-medium capitalize backdrop-blur-3xl'>
                {user.role.toLowerCase()}
              </div>
            )}
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10'
              data-hs-collapse='#navbar-image-and-text-2'
              aria-controls='navbar-image-and-text-2'
              aria-label='Toggle navigation'
            >
              <svg
                className='size-4 flex-shrink-0 hs-collapse-open:hidden'
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
                <line x1='3' x2='21' y1='6' y2='6' />
                <line x1='3' x2='21' y1='12' y2='12' />
                <line x1='3' x2='21' y1='18' y2='18' />
              </svg>
              <svg
                className='hidden size-4 flex-shrink-0 hs-collapse-open:block'
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
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-image-and-text-2'
          className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'
        >
          <div className='mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5'>
            {user ? (
              <div className='hs-dropdown relative inline-flex [--placement:top-right]'>
                <button
                  id='hs-dropdown-custom-trigger'
                  type='button'
                  className='hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-4 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                >
                  <span className='inline-flex size-[32px] items-center justify-center rounded-full bg-blue-500 text-sm font-semibold leading-none text-white'>
                    {user.name
                      .split(' ')
                      .splice(0, 2)
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </span>
                  <span className='max-w-[14rem] truncate font-medium text-gray-600 dark:text-neutral-400'>
                    {user.name}
                  </span>
                  <svg
                    className='size-4 hs-dropdown-open:rotate-180'
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
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                </button>

                <div
                  className='hs-dropdown-menu duration z-[100] mt-2 hidden min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-neutral-700 dark:bg-neutral-800'
                  aria-labelledby='hs-dropdown-custom-trigger'
                >
                  {user.role === 'STUDENT' && (
                    <Link
                      className='flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700'
                      href={'/student/profile'}
                    >
                      Profile Settings
                    </Link>
                  )}
                  <button
                    className='flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-8 py-2 text-base font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900'
                href={'/login'}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
