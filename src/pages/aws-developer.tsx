import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { awsDev } from 'data';

const COURSE_NAME = 'aws cloud dev';

export const AwsDeveloper = () => {
  return (
    <>
      <HeroCourse courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <AboutCourse courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="awsDev" marked1 />
      <MemberActivity path="awsDev" />
      <Trainers trainers={awsDev} />
    </>
  );
};
