import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, reactEn } from 'data';

type ReactProps = {
  courseName: CourseNames['REACT'];
  course: Course;
};
export const React = ({ course, courseName }: ReactProps) => {
  return (
    <>
      <CourseMain course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <About course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Trainers trainers={reactEn} />
    </>
  );
};
