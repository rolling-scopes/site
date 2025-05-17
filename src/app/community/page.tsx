import { Metadata } from 'next';

import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Community · The Rolling Scopes School';
  const description =
    'Join the RS School international developer community: collaborate, learn, share experiences, attend events, and grow your tech career together!';

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
