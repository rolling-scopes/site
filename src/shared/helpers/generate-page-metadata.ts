import { Metadata } from 'next';

import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, OG_SITE_NAME } from '../constants';

type GeneratePageMetadataProps = {
  title: string;
  description: string;
  imagePath: string;
  keywords?: string;
  alternates?: { canonical: string };
  robots?: string;
};

export function generatePageMetadata({
  title,
  description,
  imagePath,
  keywords,
  alternates,
  robots,
}: GeneratePageMetadataProps): Metadata {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(alternates && { alternates }),
    ...(robots ? { robots } : {}),

    openGraph: {
      title,
      description,
      images: [
        {
          url: imagePath,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: title,
        },
      ],
      siteName: OG_SITE_NAME,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imagePath],
    },
  };
}
