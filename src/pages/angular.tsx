import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { StudyPath } from '@/features/study-path';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { About } from '@/features/about';
import { Breadcrumbs } from '@/app/components';

export const Angular = () => {
  return (
    <>
      <CourseMain courseName="angular" />
      <Breadcrumbs />
      <TrainingProgram courseName="angular" />
      <About courseName="angular" />
      <StudyPath path="angularPath" />
      <Required courseName="angular" marked1 />
      <Trainers courseName="angular" />
    </>
  );
};
