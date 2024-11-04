import { Metadata } from 'next';
import { Mentorship } from '@/views/mentorship/mentorship.tsx';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Mentorship · The Rolling Scopes School`;

  return { title };
}

export default function CommunityRoute() {
  return <Mentorship />;
}
