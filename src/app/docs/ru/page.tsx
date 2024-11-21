import docsMenu from './docsMenu_ru.json';
import { DocsLayout } from '../components/docs-layout/docs-layout';

async function fetchDocs() {
  const indexDoc = 'README';

  let indexContent = '';

  if (indexDoc) {
    const indexRes = await fetch(
      `https://raw.githubusercontent.com/spanb4/docs/master/docs/${indexDoc}.md`,
    );

    if (indexRes.ok) {
      indexContent = await indexRes.text();
    }
  }

  return { indexContent };
}

export default async function DocsIndex() {
  const { indexContent } = await fetchDocs();

  return <DocsLayout menu={docsMenu} markdownContent={indexContent} lang="ru" />;
}
