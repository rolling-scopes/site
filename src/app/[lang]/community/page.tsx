import { Metadata } from 'next';

import { resolvePageLocale } from '@/entities/page';
import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { communityMetadata } from '@/metadata/community';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata({ params }: PageProps<'/[lang]/community'>): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { title, seoDescription: description, seoKeywords: keywords } =
    await pageStore.loadPage(PAGE_TYPE.COMMUNITY, locale);

  const { canonical, robots } = communityMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/community/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function CommunityRoute({ params }: PageProps<'/[lang]/community'>) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COMMUNITY, locale);

  return <Community sections={sections} />;
}
