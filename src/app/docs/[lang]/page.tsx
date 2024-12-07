import { DocsLayout } from '../components/docs-layout/docs-layout';
import { fetchMenu } from '../utils/fetchMenu';
import { Language } from '@/shared/types';

export async function generateMetadata() {
  return { title: 'RS School Overview' };
}

export async function generateStaticParams(): Promise<{ lang: Language }[]> {
  return [
    { lang: 'en' },
    { lang: 'ru' },
  ];
}

async function fetchDocs(lang: Language) {
  const indexDoc = 'README';

  let indexContent = '';

  if (indexDoc) {
    const indexRes = await fetch(
      `https://raw.githubusercontent.com/spanb4/docs/master/docs/${lang}/${indexDoc}.md`,
    );

    if (indexRes.ok) {
      indexContent = await indexRes.text();
    }
  }

  return indexContent;
}

export default async function DocsIndex({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const indexContent = await fetchDocs(lang);
  const docsMenu = await fetchMenu(lang);

  return <DocsLayout menu={docsMenu} markdownContent={indexContent} lang={lang} />;
}
