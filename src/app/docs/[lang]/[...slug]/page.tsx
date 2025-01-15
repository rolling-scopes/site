import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsLayout } from '../../components/docs-layout/docs-layout';
import { TITLE_POSTFIX } from '../../constants';
import { Menu } from '../../types';
import { fetchMarkdownContent } from '../../utils/fetchMarkdownContent';
import { fetchMenu } from '../../utils/fetchMenu';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language;
  slug: string[]; };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const docsMenu = await fetchMenu(lang);

  const collectTitles = (items: Menu): { slug: string[];
    title: string; }[] => {
    return items.flatMap((section) => {
      const titles = [
        {
          slug: section.link?.split('/') ?? [],
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

  return { title: `${title} ${TITLE_POSTFIX}` };
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  const supportedLanguages: Language[] = ['en', 'ru'];
  const allSlugs = [];

  const collectSlugs = (items: Menu, lang: Language) => {
    return items.flatMap((section) => {
      const results = [];

      if (section.link && !section.link.startsWith('http')) {
        const slugSegments = section.link.split('/');

        results.push({
          lang,
          slug: slugSegments,
        });
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
  params: Promise<RouteParams>;
}) {
  const { lang, slug } = await params;

  try {
    const markdownContent = await fetchMarkdownContent(lang, slug);
    const docsMenu = await fetchMenu(lang);

    return <DocsLayout menu={docsMenu} markdownContent={markdownContent} lang={lang} />;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
