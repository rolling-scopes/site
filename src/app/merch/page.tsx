import { Metadata } from 'next';

import { merchMetadata } from '@/metadata/merch';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Merch } from '@/views/merch';

export async function generateMetadata(): Promise<Metadata> {
  const { title, description, keywords, canonical, robots } = merchMetadata;

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
