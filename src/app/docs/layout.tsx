import { PropsWithChildren } from 'react';
import DocsMenu from './docs-menu'; // Importing the DocsMenu component
import docs from './docsMenu.json';

import styles from './layout.module.scss'; // Import the layout styles

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
    <div className={styles.container}>
      <div className={styles.menu}>
        <DocsMenu docs={docs} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
