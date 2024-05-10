'use client';

import React, { useState } from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';

const Login = () => {
  const { login } = useAuthUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const userData = { username, password /* other user data */ };
    login(userData);
  };

  return (
    <div className='flex w-1/3 max-w-lg flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400'>
      <div className='max-w-lg'>
        <label
          htmlFor='input-label'
          className='text-md mb-2 block font-medium dark:text-white'
        >
          Username
        </label>
        <input
          type='text'
          id='input-label'
          className='block w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
          placeholder='Enter your Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className='max-w-lg'>
        <label
          htmlFor='input-label'
          className='text-md mb-2 block font-medium dark:text-white'
        >
          Password
        </label>
        {/*<input*/}
        {/*  type='password'*/}
        {/*  id='input-label'*/}
        {/*  className='block w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'*/}
        {/*  placeholder='Enter your password'*/}
        {/*/>*/}
        <div className='relative'>
          <input
            id='hs-toggle-password'
            type='password'
            className='block w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
            className='absolute end-0 top-0 rounded-e-md p-3.5'
          >
            <svg
              className='size-3.5 flex-shrink-0 text-gray-400 dark:text-neutral-600'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                className='hs-password-active:hidden'
                d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
              ></path>
              <path
                className='hs-password-active:hidden'
                d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
              ></path>
              <path
                className='hs-password-active:hidden'
                d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
              ></path>
              <line
                className='hs-password-active:hidden'
                x1='2'
                x2='22'
                y1='2'
                y2='22'
              ></line>
              <path
                className='hidden hs-password-active:block'
                d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
              ></path>
              <circle
                className='hidden hs-password-active:block'
                cx='12'
                cy='12'
                r='3'
              ></circle>
            </svg>
          </button>
        </div>
      </div>

      <button
        type='button'
        className='text-md mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
