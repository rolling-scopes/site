import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { awsFundamentals } from '@/features/trainers/awsFundamentals.data.ts';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'aws fundamentals';

export const AwsFundamentals = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="awsFundamentals" marked2 />
      <TrainingProgram courseName="aws fundamentals badge" />
      <Trainers trainers={awsFundamentals} />
    </>
  );
};
