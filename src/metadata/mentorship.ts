import { OG_SITE_NAME, ROUTES } from '@/shared/constants';

export const mentorshipMetadata = {
  title: `Mentorship · ${OG_SITE_NAME}`,
  description:
    'RS School Mentorship: share your knowledge, help others grow, develop leadership skills, and learn by teaching in our global tech community.',
  keywords:
    'RS School mentorship, mentor, teaching, leadership, tech mentorship, programming mentor, developer mentor',
  canonical: `https://rs.school/${ROUTES.MENTORSHIP}`,
  robots: {
    index: true,
    follow: true,
  },
};

export const mentorshipCourseMetadata = {
  title: `Mentorship · ${OG_SITE_NAME}`,
  description:
    'RS School Mentorship: mentor React, Angular, or JavaScript students, share expertise, develop leadership, and grow with our global tech community.',
  keywords:
    'RS School mentorship, mentor React, mentor Angular, mentor JavaScript, teaching, tech mentorship, developer mentor',
  canonical: `https://rs.school/${ROUTES.MENTORSHIP}`,
  robots: {
    index: true,
    follow: true,
  },
};
