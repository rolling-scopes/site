import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { reactEn } from 'data';

const COURSE_NAME = 'react';

export const React = () => {
  return (
    <>
      <HeroCourse courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Trainers trainers={reactEn} />
    </>
  );
};
