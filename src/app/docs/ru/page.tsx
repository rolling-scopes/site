import { DocsLayout } from '../components/docs-layout/docs-layout';
import { fetchMenu } from '../utils/fetchMenu';

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

  return indexContent;
}

export default async function DocsIndex() {
  const indexContent = await fetchDocs();
  const docsMenu = await fetchMenu('ru');

  return <DocsLayout menu={docsMenu} markdownContent={indexContent} lang="ru" />;
}
