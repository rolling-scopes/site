import { Metadata } from 'next';

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
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'The Rolling Scopes School',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imagePath],
    },
  };
}
