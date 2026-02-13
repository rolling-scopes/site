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

  const collectTitles = (
    items: Menu,
  ): {
    slug: string[];
    title: string;
  }[] => {
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
  const supportedLanguages: Language[] = ['ru', 'en'];
  const allSlugs: {
    lang: Language;
    slug: string[];
  }[] = [];

  const collectSlugs = (
    items: Menu,
    lang: Language,
    basePath: string[] = [],
  ): {
    lang: Language;
    slug: string[];
  }[] => {
    return items.flatMap((section) => {
      const currentPathSegments =
        section.link && !section.link.startsWith('http') ? section.link.split('/') : [];
      const newBasePath = [...basePath, ...currentPathSegments];

      const self =
        section.link && !section.link.startsWith('http')
          ? [
              {
                lang,
                slug: newBasePath,
              },
            ]
          : [];

      const children = section.items ? collectSlugs(section.items, lang, newBasePath) : [];

      return [...self, ...children];
    });
  };

  for (const lang of supportedLanguages) {
    const docsMenu = await fetchMenu(lang);
    const slugsForLang = collectSlugs(docsMenu, lang);

    allSlugs.push(...slugsForLang);
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
