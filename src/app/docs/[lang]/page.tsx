import { DocsContent } from '../components/docs-content/docs-content';
import { fetchMarkdownContent } from '../utils/fetch-markdown-content';
import { docsLangMetadata } from '@/metadata/docs';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language };

export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
  const { lang } = await params;

  const { title, description, keywords, canonical, robots } = docsLangMetadata;

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: `/docs/${lang}/og.png`,
    keywords,
    alternates: { canonical },
    robots,
  });

  return metadata;
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function DocsIndex({ params }: { params: Promise<RouteParams> }) {
  const { lang } = await params;

  const indexContent = await fetchMarkdownContent(lang);

  return <DocsContent markdownContent={indexContent} lang={lang} />;
}
