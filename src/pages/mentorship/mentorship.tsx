import { useLoaderData } from 'react-router-dom';
import { PAGE_NAMES } from '@/shared/constants.ts';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MentorshipCourse } from 'data';

export const Mentorship = () => {
  const pageProps = useLoaderData() as MentorshipCourse;

  useTitle(`Mentorship ${pageProps.courseTitle} course · The Rolling Scopes School`);

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
    </>
  );
};
