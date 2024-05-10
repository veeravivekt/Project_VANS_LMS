import { UserType } from '@/types/User';

export type GradeType = {
  id: number;
  grade: number;
  submittedOn: string;
  status: string;
  student: UserType;
};
