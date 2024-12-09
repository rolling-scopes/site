'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '../../types';
import { BurgerMenu } from '@/core/base-layout/components/header/burger/burger';
import { isValidUrl } from '@/shared/helpers/isValidUrl';
import { Language } from '@/shared/types';

import styles from './docs-menu.module.scss';

interface DocsMenuProps {
  menu: Menu;
  lang: Language;
}

export const DocsMenu = ({ menu, lang }: DocsMenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (link: string) => {
    return pathname === `/docs/${lang}/${link}`;
  };

  const renderMenuItems = (items: Menu) => {
    return items.map((doc, index) => {
      if ('items' in doc && doc.items) {
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
          doc.link && (
            <li key={index}>
              <Link
                href={isValidUrl(doc.link) ? doc.link : `/docs/${lang}/${doc.link}`}
                className={isActive(doc.link) ? styles.active : ''}
              >
                {doc.title}
              </Link>
            </li>
          )
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
