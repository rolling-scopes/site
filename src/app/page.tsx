import { Metadata } from 'next';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { homeMetadata } from '@/metadata/home';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata(): Promise<Metadata> {
  const {
    title: pageTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.HOME);

  const title = `${pageTitle} · ${OG_SITE_NAME}`;
  const { canonical, robots } = homeMetadata;

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
