import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Faq } from '@/widgets/faq';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, preSchoolRu } from 'data';

type JavaScriptPreSchoolRuProps = {
  course: Course;
  lang: 'ru' | 'en';
  type?: 'Pre-school RU';
  courseName: CourseNames['JS_PRESCHOOL_RU'];
};

export const JavaScriptPreSchoolRu = ({
  lang,
  type,
  course,
  courseName,
}: JavaScriptPreSchoolRuProps) => {
  return (
    <>
      <CourseMain type={type} lang={lang} course={course} />
      <Breadcrumbs />
      <About courseName={courseName} type={type} course={course} />
      <TrainingProgram courseName={courseName} lang={lang} course={course} />
      <Required courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} lang={lang} />
      <Faq />
      <Trainers trainers={preSchoolRu} lang={lang} />
    </>
  );
};
