import { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import DocsMenu from './docs-menu';
import docs from './docsMenu.json';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

// Define the type for documentation files
// interface Doc {
//   slug: string;
//   title: string;
// }

// Function to fetch markdown files and the content of index.md
// async function fetchDocs() {
//   const docsFetchUrl = 'https://api.github.com/repos/spanb4/docs/contents/docs';
//   const res = await fetch(docsFetchUrl);

//   if (!res.ok) {
//     console.error('Failed to fetch documentation files:', res);
//     return {
//       docs: [],
//       indexContent: '',
//     }; // Return empty content on failure
//   }

//   // const files = await res.json();

//   const docs = files
//     .filter((file: any) => file.name.endsWith('.md'))
//     .map((file: any) => ({
//       slug: file.name.replace('.md', ''),
//       title: file.name.replace('.md', '').replace(/-/g, ' '),
//     }));

//   // Fetch the content for index.md
//   const indexDoc = docs.find((doc) => doc.slug === 'index');
//   let indexContent = '';

//   if (indexDoc) {
//     const indexRes = await fetch(
//       `https://raw.githubusercontent.com/spanb4/docs/master/docs/${indexDoc.slug}.md`,
//     );

//     if (indexRes.ok) {
//       indexContent = await indexRes.text();
//     }
//   }

//   return {
//     docs,
//     indexContent,
//   };
// }

export default async function DocsIndex({ children }: PropsWithChildren) {
  // const { docs } = await fetchDocs();
  // console.log(docs);
  return (
    <div className={cx('container')}>
      <div className={cx('menu')}>
        <DocsMenu docs={docs} />
      </div>
      <div className={cx('content')}>{children}</div>
    </div>
  );
}
