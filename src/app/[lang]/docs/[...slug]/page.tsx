import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import path from 'path';

import { DocsContent } from '@/app/docs/components/docs-content/docs-content';
import { TITLE_POSTFIX } from '@/app/docs/constants';
import { Menu } from '@/app/docs/types';
import { fetchMarkdownContent } from '@/app/docs/utils/fetch-markdown-content';
import { fetchMenu } from '@/app/docs/utils/fetch-menu';
import { PagePropsDocs } from '@/entities/page/types';
import { generateDocsMetadata } from '@/metadata/docs';
import { ROUTES } from '@/shared/constants';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Language } from '@/shared/types';

export async function generateMetadata({ params }: PagePropsDocs): Promise<Metadata> {
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

  const { description, keywords, robots } = generateDocsMetadata(lang, slugPath);
  const canonical = slugPath
    ? `https://rs.school/${lang}/${ROUTES.DOCS}/${slugPath}`
    : `https://rs.school/${lang}/${ROUTES.DOCS}`;

  const metadata = generatePageMetadata({
    title: `${title} ${TITLE_POSTFIX}`,
    description,
    imagePath: path.join(lang, 'docs', 'og.png'),
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export async function generateStaticParams() {
  const supportedLanguages: Language[] = ['ru'];
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

export default async function DocPage({ params }: PagePropsDocs) {
  const { lang, slug } = await params;

  try {
    const markdownContent = await fetchMarkdownContent(lang, slug);

    return <DocsContent markdownContent={markdownContent} lang={lang} />;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
