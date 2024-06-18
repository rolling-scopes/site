import { About } from '@/widgets/about';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { TrainingProgram } from '@/widgets/training-program';

const COURSE_NAME = 'js / front-end ru';

export const JavaScriptRu = () => {
  const lang = 'ru';

  return (
    <>
      <CourseMain courseName={COURSE_NAME} type="Менторская программа RU" lang={lang} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} lang={lang} />
      <About courseName={COURSE_NAME} type={lang} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} lang={lang} />
      <AboutVideo lang={lang} />
      <StudyPath path="javascriptRu" lang={lang} />
      <Required courseName={COURSE_NAME} />
    </>
  );
};
