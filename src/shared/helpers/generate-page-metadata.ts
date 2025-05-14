export function generatePageMetadata({
  title,
  description,
  imagePath,
}: {
  title: string;
  description: string;
  imagePath: string;
}) {
  return {
    title,
    description,
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
