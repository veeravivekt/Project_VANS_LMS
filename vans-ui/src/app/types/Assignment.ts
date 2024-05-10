import { GradeType } from '@/types/Grade';

export type AssignmentType = {
  id: number;
  name: string;
  problemStatement: string;
  dueDate: string;
  score: number;
  courseCode: string;
  courseId: number;
  submission: GradeType[];
};
