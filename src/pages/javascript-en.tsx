import { ROUTES } from '@/app/const';
import { About } from '@/widgets/about';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Mentors } from '@/widgets/mentors';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { javaScriptEn } from 'data';

const COURSE_NAME = 'js / front-end en';

export const JavaScriptEn = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path="javascript" type="marked" />
      <Required courseName={COURSE_NAME} />
      <Mentors route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS}`} />
      <Trainers trainers={javaScriptEn} />
    </>
  );
};
