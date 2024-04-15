import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/course-main';
import { About } from '@/features/about';
import { Required } from '@/features/required';
import { Breadcrumbs } from '@/app/components';
import { Trainers } from '@/features/trainers';

export const AwsFundamentals = () => {
  return (
    <>
      <CourseMain courseName="aws fundamentals" />
      <Breadcrumbs />
      <TrainingProgram courseName="aws fundamentals" />
      <About courseName="aws fundamentals" />
      <Required courseName="awsFundamentals" marked2 />
      <TrainingProgram courseName="aws fundamentals badge" />
      <Trainers courseName="awsFundamentals" />
    </>
  );
};
