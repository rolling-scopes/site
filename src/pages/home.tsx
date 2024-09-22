import { FC } from 'react';
import { PAGE_NAMES } from '@/app/const';
import { useTitle } from '@/shared/hooks/use-title';
import { About } from '@/widgets/about-school';
import { Alumni } from '@/widgets/alumni';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Courses } from '@/widgets/courses-school';
import { HeroPage } from '@/widgets/hero-page';
import { Mentoring } from '@/widgets/mentoring';
import { Mentors } from '@/widgets/mentors';
import { Principles } from '@/widgets/principles';
import { Requirements } from '@/widgets/requirements';
import { StudyWithUs } from '@/widgets/study-with-us';

export const Home: FC = () => {
  useTitle('Home · The Rolling Scopes School');

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.SCHOOL} />
      <Breadcrumbs />
      <About />
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
