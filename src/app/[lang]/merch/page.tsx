import { Metadata } from 'next';

import { PAGE_TYPE, pageStore, resolvePageLocale } from '@/entities/page';
import { PageProps } from '@/entities/page/types';
import { merchMetadata } from '@/metadata/merch';
import { ROUTES } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Merch } from '@/views/merch';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { title, seoDescription: description, seoKeywords: keywords } =
    await pageStore.loadPage(PAGE_TYPE.MERCH, locale);
  const { robots } = merchMetadata;
  const canonical = `https://rs.school/${lang}/${ROUTES.MERCH}`;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/merch/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default function MerchRoute() {
  return <Merch />;
}
