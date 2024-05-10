import { GradeType } from '@/types/Grade';

export type QuizType = {
  id: number;
  name: string;
  dueDate: string;
  duration: string;
  question: string;
  score: string;
  submission: GradeType[];
};
