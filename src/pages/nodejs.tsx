import { FC } from 'react';
import { About } from '@/features/about';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { nodejs } from '@/features/trainers/nodejs.data.ts';
import { TrainingProgram } from '@/features/training-program';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

const COURSE_NAME = 'node.js';

export const Nodejs: FC = () => {
  return (
    <>
      <CourseMain courseName="Node.js" />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="nodejs" />
      <Trainers trainers={nodejs} />
    </>
  );
};
