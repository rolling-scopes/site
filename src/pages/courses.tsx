import { FC } from 'react';
import { PAGE_NAMES } from '@/shared/constants';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { RSCourses } from '@/widgets/courses';
import { General } from '@/widgets/general';
import { HeroPage } from '@/widgets/hero-page';
import { MemberActivity } from '@/widgets/member-activity';

export const Courses: FC = () => {
  useTitle('Courses · The Rolling Scopes School');

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COURSES} />
      <Breadcrumbs />
      <RSCourses />
      <MemberActivity path="coursesPath" />
      <General />
    </>
  );
};
