import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Courses · The Rolling Scopes School';
  const description =
    'Explore free, community-driven RS School courses: JavaScript, React, Node.js, AWS, Angular, and more. Start your journey to full stack mastery!';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images-pages/courses.png',
  });

  return metadata;
}

export default function CoursesRoute() {
  return <Courses />;
}
