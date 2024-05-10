import * as React from 'react';
import AssignmentDetailsHeader from '@/app/components/courseDetails/assignments/AssignmentDetailsHeader';
import Syllabus from '@/app/components/courseDetails/Syllabus';
import { useCourseDetail } from '@/app/contexts/CourseDetailContext';

type Props = {
  params: {
    assignmentId: string;
  };
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const AssignmentDetailDashboard = ({ params, role }: Props) => {
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
        <Syllabus syllabus={assignment.problemStatement} />
      </div>
    )
  );
};

export default AssignmentDetailDashboard;
