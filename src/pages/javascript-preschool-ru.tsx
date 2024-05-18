import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AboutVideo } from '@/features/about-video';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { preSchool } from '@/features/trainers/preSchool.data.ts';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'js / front-end pre-school ru';

export const JavaScriptPreSchoolRu = () => {
  //todo add preschool ru in communication
  //todo trainers to ru
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type={'Pre-school'} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path={'javascriptRu'} />
      <Required courseName={'js / front-end ru'} />
      <Trainers trainers={preSchool}></Trainers>
    </>
  );
};
