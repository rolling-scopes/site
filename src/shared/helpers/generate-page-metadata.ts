export function generatePageMetadata({
  title,
  description,
  imagePath,
  keywords,
  alternates,
  robots,
}: {
  title: string;
  description: string;
  imagePath: string;
  keywords?: string;
  alternates?: { canonical: string };
  robots?: string;
}) {
  return {
    title,
    description,
    ...(keywords && { keywords }),
    ...(alternates && { alternates }),
    ...(robots && { robots }),
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
    },
  };
}
