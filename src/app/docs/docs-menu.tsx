'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './docs-menu.module.scss';

interface DocLink {
  title: string;
  link: string;
}

interface Doc {
  title: string;
  items?: DocLink[];
}

interface DocsMenuProps {
  docs: Doc[];
}

const DocsMenu = ({ docs }: DocsMenuProps) => {
  const pathname = usePathname();
  const isActive = (link: string) => pathname.endsWith(link);

  const renderMenuItems = (items: Doc[]) => {
    return (
      <ul>
        {items.map((doc, index) => (
          <li key={index}>
            <span>{doc.title}</span>
            {doc.items && (
              <ul>
                {doc.items.map((subDoc, subIndex) => {
                  return (
                    <li key={subIndex}>
                      <Link
                        href={`/docs/${subDoc.link}`}
                        className={isActive(subDoc.link) ? styles.active : ''}
                      >
                        {subDoc.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <nav className={styles.menu}>{renderMenuItems(docs)}</nav>;
};

export default DocsMenu;
