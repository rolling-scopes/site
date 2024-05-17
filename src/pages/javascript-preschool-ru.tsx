import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AboutVideo } from '@/features/about-video';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { preSchool } from '@/features/trainers/preSchool.data.ts';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'js / front-end pre-school';

export const JavaScriptPreSchoolRu = () => {
  //TODO fix Breadcrumbs
  //TODO Study path
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type={'Pre-school'} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path={'javascript'} />
      <Required courseName={'js / front-end pre-school'} />
      <Trainers trainers={preSchool}></Trainers>
    </>
  );
};
