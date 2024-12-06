import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, awsDevops } from 'data';

type AwsDevOpsProps = {
  courseName: CourseNames['AWS_DEVOPS'];
  course: Course;
};

export const AwsDevOps = ({ course, courseName }: AwsDevOpsProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication course={course} />
      <Required courseName={courseName} marked1 />
      <Trainers trainers={awsDevops} />
    </>
  );
};
