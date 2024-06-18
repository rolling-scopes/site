import { Trainers } from '@/features/trainers';
import { reactEn } from '@/features/trainers/react-en.data.ts';
import { TrainingProgram } from '@/features/training-program';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';

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
