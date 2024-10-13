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

  useTitle(`Mentorship ${pageProps.courseTitle} · The Rolling Scopes School`);

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
      <AboutMentors
        description={pageProps.description}
        icons={pageProps.links.icon}
        lang={pageProps.lang}
      />
      <MentorsBenefits benefits={pageProps.benefits} lang={pageProps.lang} />
      <MentorsActivity activities={pageProps.mentorActivities} lang={pageProps.lang} />
      <MentorsRegister lang={pageProps.lang} />
      <MentorsDocs
        linkMentorDocs={pageProps.links.mentorDocs}
        linkCourseDocs={pageProps.links.courseDocs}
        linkTelegram={pageProps.links.telegram}
        linkDiscord={pageProps.links.discord}
        courseTitle={pageProps.courseTitle}
        lang={pageProps.lang}
      />
    </>
  );
};
