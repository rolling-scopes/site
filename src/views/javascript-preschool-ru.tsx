import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { Faq } from '@/widgets/faq';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, preSchoolRu } from 'data';

type JavaScriptPreSchoolRuProps = {
  course: Course;
  lang: 'ru' | 'en';
  type?: 'pre-school-ru';
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
      <HeroCourse type={type} lang={lang} course={course} />
      <Breadcrumbs />
      <AboutCourse courseName={courseName} type={type} course={course} />
      <TrainingProgram courseName={courseName} lang={lang} course={course} />
      <Required courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} lang={lang} />
      <Faq />
      <Trainers trainers={preSchoolRu} lang={lang} />
    </>
  );
};
