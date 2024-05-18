import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AboutVideo } from '@/features/about-video';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'js / front-end ru';

export const JavaScriptRu = () => {
  const lang = 'ru';
  //todo add ru in communication
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type="Менторская программа" lang={lang} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} lang={lang} />
      <About courseName={COURSE_NAME} lang={lang} />
      <Communication courseName={COURSE_NAME} lang={lang} />
      <AboutVideo lang={lang} />
      <StudyPath path={'javascriptRu'} lang={lang} />
      <Required courseName={COURSE_NAME} lang={lang} />
    </>
  );
};
