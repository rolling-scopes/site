import { Component } from '../component';
import docsMenu from './docsMenu_ru.json';

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

  return <Component menu={docsMenu} markdownContent={indexContent} lang="ru" />;
}
