import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { angular } from '@/features/trainers/angular.data';
import { TrainingProgram } from '@/features/training-program';

export const Component = () => {
  return (
    <>
      <CourseMain courseName="angular" />
      <Breadcrumbs />
      <TrainingProgram courseName="angular" />
      <About courseName="angular" />
      <StudyPath path="angular" />
      <Required courseName="angular" marked1 />
      <Trainers trainers={angular} />
    </>
  );
};

Component.displayName = 'Angular';
