import { Metadata } from 'next';

import { homeMetadata } from '@/metadata/home';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = homeMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function HomeRoute() {
  return <Home />;
}
