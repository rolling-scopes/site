import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsLayout } from '../../components/docs-layout/docs-layout';
import { Menu } from '../../types';
import { fetchMenu } from '../../utils/fetchMenu';
import { Language } from '@/shared/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language;
    slug: string[]; }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const docsMenu = await fetchMenu(lang);

  const collectTitles = (items: Menu): { slug: string[];
    title: string; }[] => {
    return items.flatMap((section) => {
      const titles = [
        {
          slug: section.link
            ? section.link.includes('/')
              ? section.link.split('/')
              : [section.link]
            : [],
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

export async function generateStaticParams(): Promise<{ lang: Language;
  slug: string[]; }[]> {
  const supportedLanguages: Language[] = ['en', 'ru'];
  const allSlugs = [];

  const collectSlugs = (items: Menu, lang: Language) => {
    return items.flatMap((section) => {
      const results = [];

      if (section.link) {
        if (!section.link.startsWith('http')) {
          const slugSegments = section.link.includes('/')
            ? section.link.split('/')
            : [section.link];

          results.push({
            lang,
            slug: slugSegments,
          });
        }
      }

      if (section.items) {
        const subSlugs = collectSlugs(section.items, lang);

        subSlugs.forEach((subSlug) => {
          results.push({
            lang,
            slug: subSlug.slug,
          });
        });
      }

      return results;
    });
  };

  for (const lang of supportedLanguages) {
    const docsMenu = await fetchMenu(lang);
    const slugs = collectSlugs(docsMenu, lang);

    allSlugs.push(...slugs);
  }

  return allSlugs;
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ lang: Language;
    slug: string; }>;
}) {
  const { lang, slug } = await params;

  let fileUrl;

  if (slug.length > 1) {
    fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/${lang}/${slug[0]}/${slug[1]}.md`;
  } else {
    fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/${lang}/${slug[0]}.md`;
  }

  try {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch markdown file');
    }

    const markdownContent = await res.text();

    const docsMenu = await fetchMenu(lang);

    return <DocsLayout menu={docsMenu} markdownContent={markdownContent} lang={lang} />;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
