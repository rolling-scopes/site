import { ROUTES } from '@/app/const';
import { AboutCourse } from '@/widgets/about-course';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { javaScriptEn } from 'data';

const COURSE_NAME = 'js / front-end en';

export const JavaScriptEn = () => {
  return (
    <>
      <HeroCourse courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <AboutCourse courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path="javascript" type="marked" />
      <Required courseName={COURSE_NAME} />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS}`} />
      <Trainers trainers={javaScriptEn} />
    </>
  );
};
