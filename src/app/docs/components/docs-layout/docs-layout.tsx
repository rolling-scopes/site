import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import DocsMenu, { DocLinkType } from '../docs-menu/docs-menu';
import { LangSwitcher } from '../lang-switcher/lang-switcher';
import Search from '../search/search';
import { Language } from '@/shared/types';

import styles from './docs-layout.module.scss';

const cx = classNames.bind(styles);

export function DocsLayout({
  menu,
  markdownContent,
  lang,
}: {
  menu: DocLinkType[];
  markdownContent: string;
  lang: Language;
}) {
  return (
    <div className={cx('container', 'docs-layout')}>
      <div className={cx('menu-wrapper')}>
        <div className={cx('menu')}>
          <DocsMenu menu={menu} lang={lang} />
          <LangSwitcher />
        </div>
      </div>
      <div className={cx('content', 'docs-content')}>
        <div
          className={cx('markdown-body')}
          style={{
            maxWidth: 1200,
            margin: 'auto',
            textAlign: 'left',
          }}
          data-pagefind-body
        >
          <div>
            <Search />
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkToc]}
              rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
