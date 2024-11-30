import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsLayout } from '../../components/docs-layout/docs-layout';
import { fetchMenu } from '../../utils/fetchMenu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const docsMenu = await fetchMenu('en');

  const titles = docsMenu.flatMap((section) => {
    if (section.items) {
      return section.items.map((item) => ({
        slug: item.link,
        title: item.title,
      }));
    }

    return [
      {
        slug: section.link,
        title: section.title,
      },
    ];
  });

  const title = titles.find((el) => el.slug === slug)?.title;

  return { title };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const docsMenu = await fetchMenu('en');

  return docsMenu.flatMap((section) => {
    if (section.items) {
      return section.items.map((item) => ({ slug: item.link }));
    }

    return [{ slug: section.link }];
  });
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/en/${slug}.md`;

  try {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch markdown file');
    }

    const markdownContent = await res.text();

    const docsMenu = await fetchMenu('en');

    return <DocsLayout menu={docsMenu} markdownContent={markdownContent} lang="en" />;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
