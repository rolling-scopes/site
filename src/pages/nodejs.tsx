import { Audience, Required, Trainer } from '@/features/nodejs';
import { About } from '@/features/about';
import { CourseMain } from '@/features/сourse-main';

export const Nodejs = () => {
  return (
    <>
      <CourseMain courseName="Node.js course" />
      <Audience />
      <About courseName="node" />
      <Required />
      <Trainer />
    </>
  );
};
