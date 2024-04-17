import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { CourseMain } from '@/features/course-main';
import { Trainers } from '@/features/trainers';
import { TrainingProgram } from '@/features/training-program';

export const React = () => {
  return (
    <>
      <CourseMain courseName="react" />
      <Breadcrumbs />
      <TrainingProgram courseName="react" />
      <About courseName="react" />
      <Trainers courseName="reactEn" />
    </>
  );
};
