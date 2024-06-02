import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AngularForMentors } from '@/features/angular-for-mentors';
import { AngularTopics } from '@/features/angular-topics';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { angular } from '@/features/trainers/angular.data';
import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/widgets/course-main';

const COURSE_NAME = 'angular';

export const Angular = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <AngularTopics />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <StudyPath path={COURSE_NAME} />
      <Required courseName={COURSE_NAME} marked1 />
      <AngularForMentors />
      <Trainers trainers={angular} />
    </>
  );
};
