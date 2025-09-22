import { DocsContent } from '@/app/docs/components/docs-content/docs-content';
import { fetchMarkdownContent } from '@/app/docs/utils/fetch-markdown-content';
import { PAGE_TYPE, pageStore, resolvePageLocale } from '@/entities/page';
import { docsLangMetadata } from '@/metadata/docs';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';

export async function generateMetadata({ params }: PageProps<'/[lang]/docs'>) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { title, seoDescription: description, seoKeywords: keywords } =
    await pageStore.loadPage(PAGE_TYPE.DOCS, locale);
  const { canonical, robots } = docsLangMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/${lang}/docs/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export default async function DocsIndex({ params }: PageProps<'/[lang]/docs'>) {
  const { lang } = await params;

  const indexContent = await fetchMarkdownContent(lang);

  return <DocsContent markdownContent={indexContent} lang={lang} />;
}
