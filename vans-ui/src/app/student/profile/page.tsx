'use client';
import * as React from 'react';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useEffect, useState } from 'react';

type Props = {};
const Page = (props: Props) => {
  const { user, setUser } = useAuthUser();

  const [name, setName] = useState('');
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const onSave = async () => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/student/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + user?.token,
      },
      body: JSON.stringify({
        username: user?.username,
        name: name,
      }),
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      console.log('Refreshing');
      await setUser({ ...user, name });
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <h2 className='text-5xl font-bold tracking-tight'>Profile Settings</h2>
        <h3 className='mt-2 text-center text-base font-medium tracking-tight text-opacity-70'>
          Edit basic details and customize notifications
        </h3>
      </div>
      <div className='mt-8 flex w-1/3 max-w-lg flex-col gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400'>
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
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex'>
          <input
            type='checkbox'
            className='mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800'
            id='hs-checked-checkbox'
            checked={enable}
            onChange={() => setEnable(!enable)}
          />
          <label
            htmlFor='hs-checked-checkbox'
            className='ms-3 text-sm text-gray-500 dark:text-neutral-400'
          >
            Enable Notifications
          </label>
        </div>

        <button
          disabled={name === user?.name && !enable}
          type='button'
          className='text-md mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900'
          onClick={() => onSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
