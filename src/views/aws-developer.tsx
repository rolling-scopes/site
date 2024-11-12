import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, awsDev } from 'data';

type AwsDeveloperProps = {
  courseName: CourseNames['AWS_CLOUD_DEVELOPER'];
  course: Course;
};

export const AwsDeveloper = ({ course, courseName }: AwsDeveloperProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} marked1 />
      <MemberActivity path="awsDev" />
      <Trainers trainers={awsDev} />
    </>
  );
};
