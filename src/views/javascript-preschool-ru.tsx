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
  courseName: CourseNames['JS_PRESCHOOL_RU'];
};

export const JavaScriptPreSchoolRu = ({ course, courseName }: JavaScriptPreSchoolRuProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <AboutCourse courseName={courseName} course={course} />
      <TrainingProgram courseName={courseName} course={course} />
      <Required courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication course={course} />
      <Faq />
      <Trainers trainers={preSchoolRu} lang={course.language} />
    </>
  );
};
