import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, reactEn } from 'data';

type ReactProps = {
  courseName: CourseNames['REACT'];
};

export const React = ({ courseName }: ReactProps) => {
  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Trainers trainers={reactEn} courseName={courseName} />
    </>
  );
};
