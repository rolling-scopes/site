import { Metadata } from 'next';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { communityMetadata } from '@/metadata/community';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import Community from '@/views/community';

export async function generateMetadata(): Promise<Metadata> {
  const { title, seoDescription: description, seoKeywords: keywords } = await pageStore.loadPage(PAGE_TYPE.COMMUNITY);

  const { canonical, robots } = communityMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/community/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function CommunityRoute() {
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COMMUNITY);

  return <Community sections={sections} />;
}
