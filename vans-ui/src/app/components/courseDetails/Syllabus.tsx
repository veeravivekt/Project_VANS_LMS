'use client';
import * as React from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import './Syllabus.css';
import { useEffect, useState } from 'react';
import SyllabusEdit from '@/app/components/courseDetails/SyllabusEdit';

type Props = {
  syllabus: string;
};
const Syllabus = (props: Props) => {
  const [contentHtml, setContentHtml] = useState<string>('');

  useEffect(() => {
    remark()
      .use(html)
      .process(props.syllabus)
      .then((res) => {
        setContentHtml(res.toString());
      });
  });

  return (
    <div className='w-full'>
      <div className='markdown mx-8 my-4 flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70'>
        <div className='p-4 md:p-10'>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        </div>
      </div>
    </div>
  );
};
export default Syllabus;
