import { Metadata } from 'next';

import { communityMetadata } from '@/metadata/community';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = communityMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/community/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function CommunityRoute() {
  return <Community />;
}
