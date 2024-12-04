import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsLayout } from '../../components/docs-layout/docs-layout';
import { fetchMenu } from '../../utils/fetchMenu';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const docsMenu = await fetchMenu('en');

  const collectTitles = (items) => {
    return items.flatMap((section) => {
      const titles = [
        {
          slug: section.link ? (section.link.includes('/') ? section.link.split('/') : [section.link]) : [],
          title: section.title,
        },
      ];

      if (section.items) {
        const subTitles = collectTitles(section.items);

        return titles.concat(subTitles);
      }

      return titles;
    });
  };

  const titles = collectTitles(docsMenu);

  const slugPath = slug.join('/');

  const title = titles.find((el) => el.slug.join('/') === slugPath)?.title;

  return { title };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const docsMenu = await fetchMenu('en');

  const collectSlugs = (items) => {
    return items.flatMap((section) => {
      const results = [];

      if (section.link) {
        if (!section.link.startsWith('http')) {
          const slugSegments = section.link.includes('/')
            ? section.link.split('/')
            : [section.link];

          results.push({ slug: slugSegments });
        }
      }

      if (section.items) {
        const subSlugs = collectSlugs(section.items);

        subSlugs.forEach((subSlug) => {
          results.push({ slug: subSlug.slug });
        });
      }

      return results;
    });
  };

  return collectSlugs(docsMenu);
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let fileUrl;

  if (slug.length > 1) {
    fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/en/${slug[0]}/${slug[1]}.md`;
  } else {
    fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/en/${slug[0]}.md`;
  }

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
