import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { PageProps } from '@/entities/page/types';
import { communityMetadata } from '@/metadata/community';
import { ROUTES } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { title, seoDescription: description, seoKeywords: keywords } =
    await pageStore.loadPage(PAGE_TYPE.COMMUNITY, locale);

  const { robots } = communityMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/community/og.png`,
    keywords,
    alternates: { canonical: `https://rs.school/${lang}/${ROUTES.COMMUNITY}` },
    robots,
  });

  return metadata;
}

export default async function CommunityRoute({ params }: PageProps) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COMMUNITY, locale);

  return <Community sections={sections} />;
}
