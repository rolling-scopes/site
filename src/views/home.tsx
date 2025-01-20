import { FC } from 'react';
import { PAGE_NAMES } from '@/shared/constants';
import { AboutSchool } from '@/widgets/about-school';
import { Alumni } from '@/widgets/alumni';
import { Benefits } from '@/widgets/benefits';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Principles } from '@/widgets/principles';
import { Requirements } from '@/widgets/requirements';
import { StudyWithUs } from '@/widgets/study-with-us';
import { Support } from '@/widgets/support';
import { UpcomingCourses } from '@/widgets/upcoming-courses';

export const Home: FC = () => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.SCHOOL} />
      <Breadcrumbs />
      <AboutSchool />
      <Principles />
      <StudyWithUs />
      <UpcomingCourses />
      <Support />
      <Alumni />
      <MentorsWanted />
      <Benefits />
      <Requirements />
    </>
  );
};
