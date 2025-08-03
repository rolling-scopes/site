import { Metadata } from 'next';

import { coursesMetadata } from '@/metadata/courses';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Courses } from '@/views/courses';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = coursesMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/courses/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function CoursesRoute() {
  return <Courses />;
}
