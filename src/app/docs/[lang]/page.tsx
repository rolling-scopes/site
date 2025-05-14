import { DocsContent } from '../components/docs-content/docs-content';
import { TITLE_POSTFIX } from '../constants';
import { fetchMarkdownContent } from '../utils/fetch-markdown-content';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language };

export async function generateMetadata() {
  const title = `RS School Overview ${TITLE_POSTFIX}`;
  const description = 'School docs hub: rules, guides, and FAQs';

  const metadata = generatePageMetadata({
    title,
    description,
    imagePath: '/og-images-pages/docs.png',
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
