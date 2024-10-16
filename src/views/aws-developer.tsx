import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
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
      <CourseMain course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <About course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} marked1 />
      <StudyPath path="awsDev" />
      <Trainers trainers={awsDev} />
    </>
  );
};
