import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { TrainingProgram } from '@/features/training-program';

export const Nodejs = () => {
  return (
    <>
      <CourseMain courseName="Node.js course" />
      <Breadcrumbs />
      <TrainingProgram courseName="node.js" />
      <About courseName="node.js" />
      <Required courseName="nodejs" />
      <Trainers courseName="nodejs" />
    </>
  );
};
