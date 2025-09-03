import { OG_SITE_NAME, ROUTES } from '@/shared/constants';

export const coursesMetadata = {
  title: `Courses · ${OG_SITE_NAME}`,
  description:
    'Explore free, community-driven RS School courses: JavaScript, React, Node.js, AWS, Angular, and more. Start your journey to full stack mastery!',
  keywords:
    'RS School courses, free programming courses, JavaScript, React, Node.js, AWS, Angular, web development, IT education',
  canonical: `https://rs.school/${ROUTES.COURSES}`,
  robots: {
    index: true,
    follow: true,
  },
};
