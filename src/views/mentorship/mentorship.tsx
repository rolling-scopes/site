import { MentorshipHero } from './mentorship-hero/ui/mentorship-hero';
import { DetailsMentorship } from './ui/details/details';
import { MentorshipCourses } from './ui/mentorship-courses/mentorship-courses';
import { Benefits } from '@/widgets/benefits';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorsFeedback } from '@/widgets/mentors-feedback';
import { MentorsRegister } from '@/widgets/mentors-register';
import { MentorshipCourse, benefitMentorshipMentors, mentorsFeedbackData } from 'data';

const studyPathName = 'mentorship';

type MentorshipProps = {
  mentorshipData: MentorshipCourse;
  courses?: boolean;
};

export const Mentorship = ({ mentorshipData, courses = false }: MentorshipProps) => {
  return (
    <>
      <MentorshipHero lang={mentorshipData.lang} />
      <DetailsMentorship description={mentorshipData.details} lang={mentorshipData.lang} />
      {!mentorshipData.title && <Benefits {...benefitMentorshipMentors} />}
      <MemberActivity
        path={studyPathName}
        activities={mentorshipData.activities}
        lang={mentorshipData.lang}
      />
      {courses && <MentorshipCourses />}
      <MentorsRegister lang={mentorshipData.lang} />
      <MentorsDocs
        mentorDocsLink={mentorshipData.links.mentorDocs}
        courseDocsLink={mentorshipData.links.courseDocs}
        courseTitle={mentorshipData.title}
        onboardLinks={mentorshipData.links.onboard}
        lang={mentorshipData.lang}
      />
      <MentorsFeedback mentorsFeedback={mentorsFeedbackData} />
    </>
  );
};
