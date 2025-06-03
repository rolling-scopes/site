import { DocsContent } from '../components/docs-content/docs-content';
import { TITLE_POSTFIX } from '../constants';
import { fetchMarkdownContent } from '../utils/fetch-markdown-content';
import { generatePageMetadata } from '@/shared/helpers/generate-page-metadata';
import { Language } from '@/shared/types';

type RouteParams = { lang: Language };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { lang } = await params;
  const title = `RS School Overview ${TITLE_POSTFIX}`;
  const description =
    'RS School Docs: find rules, guides, FAQs, onboarding, and resources for students and mentors. Your hub for all Rolling Scopes School documentation.';
  const keywords = 'RS School docs, documentation, rules, guides, onboarding, FAQ, student resources, mentor resources';
  const canonical = 'https://rs.school/docs';
  const robots = 'index, follow';

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
