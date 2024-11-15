'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './docs-menu.module.scss';

interface DocLink {
  title: string;
  link: string;
}

interface DocLinkWithChildren {
  title: string;
  items: DocLink[];
}

type DocLinkType = DocLink | DocLinkWithChildren;

interface DocsMenuProps {
  docs: DocLinkType[];
}

const DocsMenu = ({ docs }: DocsMenuProps) => {
  const pathname = usePathname();
  const isActive = (link: string) => pathname.endsWith(link);

  const renderMenuItems = (items: DocLinkType[]) => {
    return (
      <ul>
        {items.map((doc, index) => {
          if ('items' in doc) {
            return (
              <li key={index}>
                <>
                  <span>{doc.title}</span>
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
                </>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link
                  href={`/docs/${doc.link}`}
                  className={isActive(doc.link) ? styles.active : ''}
                >
                  {doc.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return <nav className={styles.menu}>{renderMenuItems(docs)}</nav>;
};

export default DocsMenu;
