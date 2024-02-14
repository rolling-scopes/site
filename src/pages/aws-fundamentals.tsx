import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { About } from '@/features/about';
import { Required } from '@/features/required';
import { Breadcrumbs } from '@/app/components';

export const AwsFundamentals = () => {
  return (
    <>
      <CourseMain courseName="aws fundamentals" />
      <Breadcrumbs />
      <TrainingProgram courseName="aws fundamentals" />
      <About courseName="aws fundamentals" />
      <Required courseName="awsFundamentals" marked2 />
      <TrainingProgram courseName="aws fundamentals badge" />
    </>
  );
};
