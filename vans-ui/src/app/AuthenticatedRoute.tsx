// ProtectedRoute.js
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthUser } from './contexts/AuthContext';

const AuthenticatedRoute = ({
  allowedRole,
  children,
}: {
  allowedRole: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
  children: React.ReactNode;
}) => {
  const { user } = useAuthUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (allowedRole !== user.role) {
      router.push(`/${user.role.toLowerCase()}`);
    }
  }, [user, router, allowedRole]);

  return children;
};

export default AuthenticatedRoute;
