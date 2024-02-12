import { Audience } from '@/features/nodejs';
import { CourseMain } from '@/features/сourse-main';
import { Required } from '@/features/required';
import { About } from '@/features/about';
import { Trainers } from '@/features/trainers';

export const Nodejs = () => {
  return (
    <>
      <CourseMain courseName="Node.js course" />
      <Audience />
      <About courseName="node" />
      <Required courseName="nodejs" />
      <Trainers courseName="nodejs" />
    </>
  );
};
