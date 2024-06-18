import { AboutVideo } from '@/features/about-video';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { About } from '@/widgets/about';

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
