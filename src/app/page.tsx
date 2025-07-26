import { Metadata } from 'next';

import { landingPageStore } from '@/entities/landing-page/model/store';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const { title: homeTitle } = await landingPageStore.loadLandingPage('home');
  const title = `${homeTitle} · The Rolling Scopes School`;

  return { title };
}

export default async function HomeRoute() {
  return <Home />;
}
