import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Faq } from '@/widgets/faq';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { preSchoolRu } from 'data';

const COURSE_NAME = 'js / front-end pre-school ru';

export const JavaScriptPreSchoolRu = () => {
  const lang = 'ru';
  const type = 'Pre-school RU';

  return (
    <>
      <CourseMain courseName={COURSE_NAME} type={type} lang={lang} />
      <Breadcrumbs />
      <About courseName={COURSE_NAME} type={type} />
      <TrainingProgram courseName={COURSE_NAME} lang={lang} />
      <Required courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} lang={lang} />
      <Faq />
      <Trainers trainers={preSchoolRu} lang={lang} />
    </>
  );
};
