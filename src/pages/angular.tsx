import { ROUTES } from '@/app/const';
import { AboutCourse } from '@/widgets/about-course';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { angular } from 'data';

const COURSE_NAME = 'angular';

export const Angular = () => {
  return (
    <>
      <HeroCourse courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <AngularTopics />
      <AboutCourse courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <MemberActivity path={COURSE_NAME} />
      <Required courseName={COURSE_NAME} marked1 />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`} />
      <Trainers trainers={angular} />
    </>
  );
};
