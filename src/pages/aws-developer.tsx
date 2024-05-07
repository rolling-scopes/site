import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { awsDev } from '@/features/trainers/awsDev.data.ts';
import { TrainingProgram } from '@/features/training-program';

export const AwsDeveloper = () => {
  return (
    <>
      <CourseMain courseName="aws cloud dev" />
      <Breadcrumbs />
      <TrainingProgram courseName="aws cloud dev" />
      <About courseName="aws cloud dev" />
      <Required courseName="awsDev" marked1 />
      <StudyPath path="awsDev" />
      <Trainers trainers={awsDev} />
    </>
  );
};
