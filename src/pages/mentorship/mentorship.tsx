import { useLoaderData } from 'react-router-dom';
import { PAGE_NAMES } from '@/shared/constants.ts';
import { useTitle } from '@/shared/hooks/use-title';
import { AboutMentorship } from '@/widgets/about-mentorship';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorshipCourse } from 'data';

export const Mentorship = () => {
  const pageProps = useLoaderData() as MentorshipCourse;

  useTitle(`Mentorship ${pageProps.courseTitle} · The Rolling Scopes School`);

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
      <AboutMentorship benefits={pageProps.benefits} lang={pageProps.lang} />
      <MentorsDocs
        link={pageProps.mentorDocsUrl}
        courseTitle={pageProps.courseTitle}
        lang={pageProps.lang}
      />
    </>
  );
};
