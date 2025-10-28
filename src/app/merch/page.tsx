import { Metadata } from 'next';

import { PAGE_TYPE, pageStore, resolvePageLocale } from '@/entities/page';
import { merchMetadata } from '@/metadata/merch';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Merch } from '@/views/merch';

export async function generateMetadata(): Promise<Metadata> {
  const locale = resolvePageLocale();
  const { title, seoDescription: description, seoKeywords: keywords } =
    await pageStore.loadPage(PAGE_TYPE.MERCH, locale);
  const { canonical, robots } = merchMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/merch/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function MerchRoute() {
  return <Merch />;
}
