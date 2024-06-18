import { AngularTopics } from '@/features/angular-topics';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { MentorsWanted } from '@/features/mentors-wanted';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { angular } from '@/features/trainers/angular.data';
import { TrainingProgram } from '@/features/training-program';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { About } from '@/widgets/about';

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
