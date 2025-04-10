import { Benefits } from '@/widgets/benefits';
import { MentorsDocs } from '@/widgets/mentors-docs';
import { MentorsFeedback } from '@/widgets/mentors-feedback';
import { MentorsRegister } from '@/widgets/mentors-register';
import { MentorActivities } from '@/widgets/mentorship-activities';
import { MentorshipAfterRegister } from '@/widgets/mentorship-after-register';
import { MentorshipCourses } from '@/widgets/mentorship-courses/mentorship-courses';
import { MentorshipDetails } from '@/widgets/mentorship-details/details/mentorship-details';
import { MentorshipHero } from '@/widgets/mentorship-hero';
import { MentorshipCourse, benefitMentorshipMentors, mentorsFeedbackData } from 'data';

type MentorshipProps = {
  mentorshipData: MentorshipCourse;
  courses?: boolean;
};

export const Mentorship = ({ mentorshipData, courses = false }: MentorshipProps) => {
  return (
    <>
      <MentorshipHero lang={mentorshipData.lang} />
      <MentorshipDetails description={mentorshipData.details} lang={mentorshipData.lang} />
      {!mentorshipData.title && <Benefits {...benefitMentorshipMentors} />}
      <MentorActivities
        activitiesTitle={mentorshipData.activitiesTitle}
        activities={mentorshipData.activities}
      />
      {courses && <MentorshipCourses />}
      <MentorsFeedback mentorsFeedback={mentorsFeedbackData} />
      <MentorsRegister lang={mentorshipData.lang} />
      <MentorshipAfterRegister lang={mentorshipData.lang} />
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
