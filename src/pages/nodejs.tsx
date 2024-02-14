import { CourseMain } from '@/features/сourse-main';
import { Required } from '@/features/required';
import { About } from '@/features/about';
import { Trainers } from '@/features/trainers';
import { TrainingProgram } from '@/features/training-program';

export const Nodejs = () => {
  return (
    <>
      <CourseMain courseName="Node.js course" />
      <TrainingProgram courseName="nodejs" />
      <About courseName="node.js" />
      <Required courseName="nodejs" />
      <Trainers courseName="nodejs" />
    </>
  );
};
