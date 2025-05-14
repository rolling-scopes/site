import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Community · The Rolling Scopes School';
  const description = 'An international community of developers since 2013';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images-pages/community.png',
  });

  return metadata;
}

export default function CommunityRoute() {
  return <Community />;
}
