import { Metadata } from 'next';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Community · The Rolling Scopes School';

  return { title };
}

export default function CommunityRoute() {
  return <Community />;
}
