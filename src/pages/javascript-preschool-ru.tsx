import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { Certification } from '@/features/certification';
import { Communication } from '@/features/communication';
import { CourseMain } from '@/features/course-main';
import { Faq } from '@/features/faq';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { preSchoolRu } from '@/features/trainers/preSchool.data.ts';
import { TrainingProgram } from '@/features/training-program';

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
