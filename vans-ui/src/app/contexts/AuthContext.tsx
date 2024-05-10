'use client';
import React, { createContext, useContext, useState } from 'react';
import { AuthenticatedUserType } from '@/types/AuthenticatedUser';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<{
  user: AuthenticatedUserType | null;
  login: any;
  logout: any;
  setUser: any;
}>({ user: null, login: () => {}, logout: () => {}, setUser: () => {} });

export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter(); // Access Next.js router
  const [user, setUser] = useState<AuthenticatedUserType | null>(null);

  const login = async (userData: { username: string; password: string }) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const res = await fetch(`${domain}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    } else {
      const data: AuthenticatedUserType = await res.json();
      setUser(data);
      router.push(`/${data.role.toLowerCase()}`);
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthContext);
