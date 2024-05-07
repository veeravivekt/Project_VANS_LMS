import { UserType } from '@/types/User';
import { AssignmentType } from '@/types/Assignment';
import { QuizType } from '@/types/Quiz';

export type CourseType = {
  id: number;
  name: string;
  isPublished: boolean;
  syllabus: string;
  term: string;
  isCurrent: boolean;
  courseCode: string;
  professor: UserType;
  participants: UserType[];
  assignments: AssignmentType[];
  quizzes: QuizType[];
  participantsGrades: {
    grade: string;
    student: string;
  }[];
  announcements: {
    id: number;
    subject: string;
    announcement: string;
  }[];
};
