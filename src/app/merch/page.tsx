import { Metadata } from 'next';

import { Merch } from '@/views/merch/merch';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Merch · The Rolling Scopes School';

  return { title };
}

export default function CommunityRoute() {
  return <Merch />;
}
