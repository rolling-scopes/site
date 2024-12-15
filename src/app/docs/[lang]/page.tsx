import { DocsLayout } from '../components/docs-layout/docs-layout';
import { fetchMarkdownContent } from '../utils/fetchMarkdownContent';
import { fetchMenu } from '../utils/fetchMenu';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language };

export async function generateMetadata() {
  return { title: 'RS School Overview' };
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return [
    { lang: 'en' },
    { lang: 'ru' },
  ];
}

export default async function DocsIndex({ params }: { params: Promise<RouteParams> }) {
  const { lang } = await params;

  const indexContent = await fetchMarkdownContent(lang);
  const docsMenu = await fetchMenu(lang);

  return <DocsLayout menu={docsMenu} markdownContent={indexContent} lang={lang} />;
}
