import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { awsDevops } from '@/widgets/trainers/awsDevops';
import { TrainingProgram } from '@/widgets/training-program';

const COURSE_NAME = 'aws devops';

export const AwsDevOps = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="awsDevops" marked1 />
      <Trainers trainers={awsDevops} />
    </>
  );
};
