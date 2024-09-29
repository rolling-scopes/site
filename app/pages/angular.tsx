import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { angular } from 'data';

const COURSE_NAME = 'angular';

type AngularProps = {
  courses: Course[];
};
export const Angular = ({ courses }: AngularProps) => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} courses={courses} />
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
