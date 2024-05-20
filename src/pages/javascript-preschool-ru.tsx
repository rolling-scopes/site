import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AboutVideo } from '@/features/about-video';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Faq } from '@/features/faq';
import { Required } from '@/features/required';
// import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { preSchool } from '@/features/trainers/preSchool.data.ts';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'js / front-end pre-school ru';

export const JavaScriptPreSchoolRu = () => {
  const lang = 'ru';
  //todo trainers to ru
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type={'Pre-school RU'} lang={lang} />
      <Breadcrumbs />
      <About courseName={COURSE_NAME} lang={lang} />
      <TrainingProgram courseName={COURSE_NAME} lang={lang} />
      <Required courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} lang="ru" />
      <Faq />
      <Communication courseName={COURSE_NAME} lang={lang} />
      <AboutVideo lang={lang} />
      {/* <StudyPath path={'javascriptRu'} lang={lang} /> */}
      <Trainers trainers={preSchool}></Trainers>
    </>
  );
};
