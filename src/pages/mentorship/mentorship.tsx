import { useLoaderData } from 'react-router-dom';
import { PAGE_NAMES } from '@/shared/constants.ts';
import { useTitle } from '@/shared/hooks/use-title';
import { AboutMentors } from '@/widgets/about-mentors';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MentorsActivity } from '@/widgets/mentors-activity';
import { MentorsBenefits } from '@/widgets/mentors-benefit';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorsRegister } from '@/widgets/mentors-register';
import { MentorshipCourse } from 'data';

export const Mentorship = () => {
  const pageProps = useLoaderData() as MentorshipCourse;

  useTitle(`Mentorship ${pageProps.title || ''} · The Rolling Scopes School`);

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
      <AboutMentors
        description={pageProps.details}
        icons={pageProps.links.icon}
        lang={pageProps.lang}
      />
      {!pageProps.title && <MentorsBenefits />}
      <MentorsActivity activities={pageProps.activities} lang={pageProps.lang} />
      <MentorsRegister lang={pageProps.lang} />
      <MentorsDocs
        mentorDocsLink={pageProps.links.mentorDocs}
        courseDocsLink={pageProps.links.courseDocs}
        courseTitle={pageProps.title}
        lang={pageProps.lang}
        socialLinks={pageProps.links.social}
      />
    </>
  );
};
