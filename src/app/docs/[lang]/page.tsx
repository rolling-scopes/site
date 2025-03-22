import { DocsContent } from '../components/docs-content/docs-content';
import { TITLE_POSTFIX } from '../constants';
import { fetchMarkdownContent } from '../utils/fetchMarkdownContent';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language };

export async function generateMetadata() {
  return { title: `RS School Overview ${TITLE_POSTFIX}` };
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

  return <DocsContent markdownContent={indexContent} lang={lang} />;
}
