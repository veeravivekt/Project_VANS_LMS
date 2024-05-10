export type AuthenticatedUserType = {
  username: string;
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
  token: string;
  name: string;
  email: string;
};
