import { Metadata } from 'next';

import { OG_FOLDER } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Home · The Rolling Scopes School';
  const description =
    'RS School: free, community-driven education for future developers. Learn JavaScript, React, Node.js, AWS, and more. Grow your tech career with us!';
  const keywords = 'RS School, Rolling Scopes, free programming courses, JavaScript, React, Node.js, AWS, web development, IT education, coding bootcamp';
  const canonical = 'https://rs.school/';
  const robots = 'index, follow';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${OG_FOLDER}/home.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function HomeRoute() {
  return <Home />;
}
