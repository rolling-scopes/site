import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { awsDev } from '@/features/trainers/awsDev.data.ts';
import { TrainingProgram } from '@/features/training-program';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { About } from '@/widgets/about';

const COURSE_NAME = 'aws cloud dev';

export const AwsDeveloper = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="awsDev" marked1 />
      <StudyPath path="awsDev" />
      <Trainers trainers={awsDev} />
    </>
  );
};
