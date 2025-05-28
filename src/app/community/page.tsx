import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Community · The Rolling Scopes School';
  const description =
    'Join the RS School international developer community: collaborate, learn, share experiences, attend events, and grow your tech career together!';
  const keywords = 'RS School community, developer community, programming community, events, collaboration, tech networking';
  const canonical = 'https://rs.school/community';
  const robots = 'index, follow';

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
