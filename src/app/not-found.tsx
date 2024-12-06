import { Metadata } from 'next';
import { NotFound } from '@/views/not-found/not-found';

export async function generateMetadata(): Promise<Metadata> {
  const title = '404 Not Found';

  return { title };
}

export default function NotFoundRoute() {
  return <NotFound />;
}
