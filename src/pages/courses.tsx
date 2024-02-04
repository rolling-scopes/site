import {
  About,
  Courses as RSCourses,
  General,
  Main,
  Mentoring,
  Mentors,
  Requirements
} from '@/features/courses';
import { Principles } from '@/features/principles';
import { StudyPath } from '@/features/study-path';

import { useTitle } from '@/app/hooks';

export const Courses = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <Main />
      <About />
      <Principles />
      <RSCourses />
      <StudyPath path="coursesPath" />
      <General />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};
