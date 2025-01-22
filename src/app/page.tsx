import { Metadata } from 'next';

import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Home · The Rolling Scopes School';

  return { title };
}

export default function HomeRoute() {
  return <Home />;
}
