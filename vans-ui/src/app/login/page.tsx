'use client';
import Login from '@/app/components/login/Login';
import { useRouter } from 'next/navigation';
import { useAuthUser } from '@/app/contexts/AuthContext';
import { useEffect } from 'react';

const Page = () => {
  const { user } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/${user.role.toLowerCase()}`);
    }
  }, [router, user]);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-semibold tracking-tight'>Welcome to</h3>
        <h2 className='text-5xl font-bold tracking-tight'>Project VANS</h2>
      </div>
      <h3 className='mt-3 text-xl font-medium tracking-tight text-opacity-70'>
        The best e-learning platform for students and universities
      </h3>
      <div className='my-8 flex w-full flex-col items-center justify-center'>
        <Login />
      </div>
    </div>
  );
};

export default Page;
