'use client';

import { ReactNode, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { Menu } from '../../types';
import { DocsMenu } from '../docs-menu/docs-menu';
import Search from '../search/search';
import { Language } from '@/shared/types';

import styles from './docs-layout.module.scss';

const cx = classNames.bind(styles);

type DocsLayoutProps = {
  children: ReactNode;
  menu: Menu;
  lang: Language;
};

/**
 * Layout component that renders the documentation navigation, search, and page content.
 *
 * The component manages the menu open state, passes the menu and toggle handler to DocsMenu,
 * and hides the main docs content while the menu is open.
 *
 * @param children - The page content (rendered inside the article with markdown styling)
 * @param menu - The structure describing navigation items for the DocsMenu
 * @param lang - Language identifier used by the Search component
 * @returns The docs layout element containing navigation, search, and the supplied content
 */
export function DocsLayout({ children, menu, lang }: DocsLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <main className={cx('container', 'content', 'docs-layout')}>
      <nav className={cx('menu-wrapper')}>
        <div className={cx('menu')}>
          <DocsMenu menu={menu} isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        </div>
      </nav>
      {!isMenuOpen && (
        <div className={cx('docs-content')}>
          <div>
            <div className={cx('docs-top')}>
              <Search lang={lang} resultsRef={resultsRef} />
            </div>
            <div ref={resultsRef}></div>
          </div>
          <article className={cx('markdown-body')} data-pagefind-body>
            {children}
          </article>
        </div>
      )}
    </main>
  );
}