import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Home · The Rolling Scopes School';
  const description =
    'RS School: free, community-driven education for future developers. Learn JavaScript, React, Node.js, AWS, and more. Grow your tech career with us!';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images-pages/home.png',
  });

  return metadata;
}

export default function HomeRoute() {
  return <Home />;
}
