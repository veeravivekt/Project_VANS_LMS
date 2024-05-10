// @flow
import * as React from 'react';
import Submissions from '@/app/components/Submissions';
import AssignmentDetailsHeader from '@/app/components/courseDetails/assignments/AssignmentDetailsHeader';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  params: {
    assignmentId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const AssignmentSubmissions = ({ params, role }: Props) => {
  const { course } = useCourseDetail();
  const assignment = course.assignments.find(
    (value) => value.id === +params.assignmentId
  );
  return (
    assignment && (
      <div className='flex w-full flex-col items-center'>
        <AssignmentDetailsHeader
          assignment={assignment}
          course={course}
          role={role}
        />
        <Submissions
          role={role}
          grades={assignment.submission}
          totalGrade={assignment.score}
        />
      </div>
    )
  );
};

export default AssignmentSubmissions;
