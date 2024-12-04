'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isValidUrl } from '../../utils/isValidUrl';
import { BurgerMenu } from '@/core/base-layout/components/header/burger/burger';
import { Language } from '@/shared/types';

import styles from './docs-menu.module.scss';

interface DocLink {
  title: string;
  link: string;
}

interface DocLinkWithChildren {
  title: string;
  link?: string;
  items: DocLink[];
}

export type DocLinkType = DocLink | DocLinkWithChildren;

interface DocsMenuProps {
  menu: DocLinkType[];
  lang: Language;
}

const DocsMenu = ({ menu, lang }: DocsMenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (link: string) => pathname.endsWith(link);

  const renderMenuItems = (items: DocLinkType[]) => {
    return items.map((doc, index) => {
      if ('items' in doc) {
        return (
          <li key={index}>
            {doc.link
              ? (
                  <>
                    <Link
                      href={isValidUrl(doc.link) ? doc.link : `/docs/${lang}/${doc.link}`}
                      className={isActive(doc.link) ? styles.active : ''}
                    >
                      {doc.title}
                    </Link>
                  </>
                )
              : (
                  <>
                    <span>{doc.title}</span>
                  </>
                )}
            <ul>{renderMenuItems(doc.items)}</ul>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <Link
              href={isValidUrl(doc.link) ? doc.link : `/docs/${lang}/${doc.link}`}
              className={isActive(doc.link) ? styles.active : ''}
            >
              {doc.title}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <>
      <BurgerMenu isMenuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>{renderMenuItems(menu)}</ul>
      </nav>
    </>
  );
};

export default DocsMenu;
