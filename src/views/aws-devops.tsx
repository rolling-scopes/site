import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseName, awsDevops } from 'data';

interface AwsDevOpsProps {
  courseName: CourseName;
  course: Course;
}

export const AwsDevOps = ({ course, courseName }: AwsDevOpsProps) => {
  return (
    <>
      <CourseMain course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <About course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} marked1 />
      <Trainers trainers={awsDevops} />
    </>
  );
};