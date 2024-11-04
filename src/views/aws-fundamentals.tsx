import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, awsFundamentals } from 'data';

type AwsFundamentalsProps = {
  course: Course;
  courseName: CourseNames['AWS_FUNDAMENTALS'];
};
export const AwsFundamentals = ({ course, courseName }: AwsFundamentalsProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} marked2 />
      <TrainingProgram course={course} courseName={`${courseName} badge`} />
      <Trainers trainers={awsFundamentals} />
    </>
  );
};
