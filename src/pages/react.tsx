import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Trainers } from '@/features/trainers';
import { reactEn } from '@/features/trainers/react-en.data.ts';
import { TrainingProgram } from '@/features/training-program';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { About } from '@/widgets/about';

const COURSE_NAME = 'react';

export const React = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Trainers trainers={reactEn} />
    </>
  );
};
