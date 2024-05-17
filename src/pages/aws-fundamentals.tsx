import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { awsFundamentals } from '@/features/trainers/awsFundamentals.data.ts';
import { TrainingProgram } from '@/features/training-program';

export const AwsFundamentals = () => {
  return (
    <>
      <CourseMain courseName="aws fundamentals" />
      <Breadcrumbs />
      <TrainingProgram courseName="aws fundamentals" />
      <About courseName="aws fundamentals" />
      <Communication courseName="aws fundamentals" />
      <Required courseName="awsFundamentals" marked2 />
      <TrainingProgram courseName="aws fundamentals badge" />
      <Trainers trainers={awsFundamentals} />
    </>
  );
};
