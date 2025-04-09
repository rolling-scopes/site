import { MentorActivities } from '../../widgets/mentorship-activities';
import { MentorshipCourses } from '../../widgets/mentorship-courses/mentorship-courses';
import { DetailsMentorship } from '../../widgets/mentorship-details/details/details';
import { MentorshipHero } from '../../widgets/mentorship-hero';
import { Benefits } from '@/widgets/benefits';
import { MentorsAfterRegister } from '@/widgets/mentors-after-register';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorsFeedback } from '@/widgets/mentors-feedback';
import { MentorsRegister } from '@/widgets/mentors-register';
import { MentorshipCourse, benefitMentorshipMentors, mentorsFeedbackData } from 'data';

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
      <MentorActivities
        activitiesTitle={mentorshipData.activitiesTitle}
        activities={mentorshipData.activities}
      />
      {courses && <MentorshipCourses />}
      <MentorsFeedback mentorsFeedback={mentorsFeedbackData} />
      <MentorsRegister lang={mentorshipData.lang} />
      <MentorsAfterRegister lang={mentorshipData.lang} />
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
