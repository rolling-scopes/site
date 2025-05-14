import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Courses · The Rolling Scopes School';
  const description = 'Community driven. 100% free of charge. Journey to full stack mastery';

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
