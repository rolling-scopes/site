import { DetailsMentorship } from './ui/details/details';
import { PAGE_NAMES } from '@/shared/constants';
import { Benefits } from '@/widgets/benefits';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorsRegister } from '@/widgets/mentors-register';
import { MentorshipCourse, benefitMentorshipMentors } from 'data';

const studyPathName = 'mentorship';

type MentorshipProps = {
  mentorshipData: MentorshipCourse;
};

export const Mentorship = ({ mentorshipData }: MentorshipProps) => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
      <DetailsMentorship description={mentorshipData.details} lang={mentorshipData.lang} />
      {!mentorshipData.title && <Benefits {...benefitMentorshipMentors} />}
      <MemberActivity
        path={studyPathName}
        activities={mentorshipData.activities}
        lang={mentorshipData.lang}
      />
      <MentorsRegister lang={mentorshipData.lang} />
      <MentorsDocs
        mentorDocsLink={mentorshipData.links.mentorDocs}
        courseDocsLink={mentorshipData.links.courseDocs}
        courseTitle={mentorshipData.title}
        onboardLinks={mentorshipData.links.onboard}
        lang={mentorshipData.lang}
      />
    </>
  );
};
