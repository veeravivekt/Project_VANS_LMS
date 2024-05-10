// @flow
import * as React from 'react';
import { AssignmentType } from '@/types/Assignment';
import AssignmentCard from '@/app/components/courseDetails/assignments/AssignmentCard';

type Props = {
  assignments: AssignmentType[];
  role: 'STUDENT' | 'PROFESSOR' | 'ADMIN';
};
const AssignmentList = ({ assignments, role }: Props) => {
  return (
    <div className='-mr-3 flex w-full flex-row flex-wrap justify-center p-8'>
      {assignments.map((assignment, index) => (
        <div className='w-full pb-5 pr-5 md:w-1/3' key={index}>
          <AssignmentCard assignment={assignment} role={role} />
        </div>
      ))}
    </div>
  );
};

export default AssignmentList;
