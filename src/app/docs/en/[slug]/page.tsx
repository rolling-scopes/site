import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Component } from '../../component';
import docsMenu from '../docsMenu_en.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

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
  // TODO REPLACE IT WITH FETCHING FROM REMOTE
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

    return <Component menu={docsMenu} markdownContent={markdownContent} lang="en" />;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
