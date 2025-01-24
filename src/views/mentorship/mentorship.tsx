import { MentorshipHero } from './mentorship-hero/ui/mentorship-hero';
import { DetailsMentorship } from './ui/details/details';
import { MentorActivities } from './ui/mentor-activities';
import { MentorshipCourses } from './ui/mentorship-courses/mentorship-courses';
import { MentorsAfterRegister } from '@/views/mentorship/ui/mentors-after-register';
import { Benefits } from '@/widgets/benefits';
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
      <MentorsRegister lang={mentorshipData.lang} />
      <MentorsAfterRegister lang={mentorshipData.lang} />
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
