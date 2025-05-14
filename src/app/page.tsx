import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Home · The Rolling Scopes School';
  const description = 'Connecting people, growing together, having fun';

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
