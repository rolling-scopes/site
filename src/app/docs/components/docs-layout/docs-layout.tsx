'use client';

import { ReactNode, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { Menu } from '../../types';
import { DocsMenu } from '../docs-menu/docs-menu';
import { LangSwitcher } from '../lang-switcher/lang-switcher';
import Search from '../search/search';
import { Language } from '@/shared/types';

import styles from './docs-layout.module.scss';

const cx = classNames.bind(styles);

type DocsLayoutProps = {
  children: ReactNode;
  menu: Menu;
  lang: Language;
};

export function DocsLayout({ children, menu, lang }: DocsLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resultsRef = useRef(null);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <main className={cx('docs-layout', 'container', 'content')}>
      <nav className={cx('menu-wrapper')}>
        <div className={cx('menu')}>
          <DocsMenu menu={menu} lang={lang} isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
        </div>
      </nav>
      {!isMenuOpen && (
        <div className={cx('docs-content')}>
          <div>
            <div className={cx('docs-top')}>
              <Search lang={lang} resultsRef={resultsRef} />
              <LangSwitcher />
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
