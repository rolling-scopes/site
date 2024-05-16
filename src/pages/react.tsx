import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Trainers } from '@/features/trainers';
import { reactEn } from '@/features/trainers/react-en.data.ts';
import { TrainingProgram } from '@/features/training-program';

export const React = () => {
  return (
    <>
      <CourseMain courseName="react" />
      <Breadcrumbs />
      <TrainingProgram courseName="react" />
      <About courseName="react" />
      <Communication courseName="react" />
      <Trainers trainers={reactEn} />
    </>
  );
};
