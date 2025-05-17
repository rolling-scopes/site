import { Metadata } from 'next';

import { OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Courses · The Rolling Scopes School';
  const description =
    'Explore free, community-driven RS School courses: JavaScript, React, Node.js, AWS, Angular, and more. Start your journey to full stack mastery!';
  const keywords = 'RS School courses, free programming courses, JavaScript, React, Node.js, AWS, Angular, web development, IT education';
  const canonical = 'https://rs.school/courses';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/courses.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function CoursesRoute() {
  return <Courses />;
}
