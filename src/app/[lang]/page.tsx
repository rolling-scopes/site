import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { homeMetadata } from '@/metadata/home';
import { OG_SITE_NAME } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Home } from '@/views/home';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const {
    title: pageTitle,
    seoDescription: description,
    seoKeywords: keywords,
  } = await pageStore.loadPage(PAGE_TYPE.HOME, locale);

  const title = `${pageTitle} · ${OG_SITE_NAME}`;
  const { robots } = homeMetadata;
  const canonical = `https://rs.school/${lang}`;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function HomeRoute({ params }: PageProps) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.HOME, locale);

  return <Home sections={sections} />;
}
