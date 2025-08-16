import { Metadata } from 'next';

// import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
// import { landingPageStore } from '@/entities/landing-page/model/store';
import { homeMetadata } from '@/metadata/home';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  // const { title: homeTitle } = await landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.HOME);
  // const title = `${homeTitle} · The Rolling Scopes School`;
  const { title, description, keywords, canonical, robots } = homeMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function HomeRoute() {
  return <Home />;
}
