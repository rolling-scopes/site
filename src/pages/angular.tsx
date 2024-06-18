import { MentorsWanted } from '@/features/mentors-wanted';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { angular } from '@/features/trainers/angular.data';
import { TrainingProgram } from '@/features/training-program';
import { About } from '@/widgets/about';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
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
      <MentorsWanted />
      <Trainers trainers={angular} />
    </>
  );
};
