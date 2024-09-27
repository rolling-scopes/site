import { FC } from 'react';
import { useTitle } from '@/shared/hooks/use-title';
import { AboutSchool } from '@/widgets/about-school';
import { Alumni } from '@/widgets/alumni';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Courses } from '@/widgets/courses-school';
import { Main } from '@/widgets/main';
import { Mentoring } from '@/widgets/mentoring';
import { Mentors } from '@/widgets/mentors';
import { Principles } from '@/widgets/principles';
import { Requirements } from '@/widgets/requirements';
import { StudyWithUs } from '@/widgets/study-with-us';

export const Home: FC = () => {
  useTitle('Home · The Rolling Scopes School');

  return (
    <>
      <Main />
      <Breadcrumbs />
      <AboutSchool />
      <Principles />
      <StudyWithUs />
      <Courses />
      <Alumni />
      <Mentors />
      <Mentoring />
      <Requirements />
    </>
  );
};
