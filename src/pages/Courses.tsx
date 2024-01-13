import {
  About,
  Courses,
  General,
  Main,
  Mentoring,
  Mentors,
  Requirements,
  StudyPath
} from '@/features/coursesFeatures';
import { FooterPartners } from '@/features/footerPartners';
import { Principles } from '@/features/Principles';

import { useTitle } from '@/shared/hooks';

export const CoursesPage = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <Main />
      <About />
      <Principles />
      <Courses />
      <StudyPath />
      <General />
      <Mentors />
      <Mentoring />
      <Requirements />
      <FooterPartners />
    </>
  );
};
