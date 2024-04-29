import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { CourseMain } from '@/features/course-main';
import { Trainers } from '@/features/trainers';
import { reactEn } from '@/features/trainers/react-en.data.ts';
import { TrainingProgram } from '@/features/training-program';

export const Component = () => {
  return (
    <>
      <CourseMain courseName="react" />
      <Breadcrumbs />
      <TrainingProgram courseName="react" />
      <About courseName="react" />
      <Trainers trainers={reactEn} />
    </>
  );
};

Component.displayName = 'React';
