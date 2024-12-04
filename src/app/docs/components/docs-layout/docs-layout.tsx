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

const baseUrl = 'https://raw.githubusercontent.com/SpaNb4/docs/refs/heads/master/docs/images/';

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
        <Search />
        <div className={cx('markdown-body')} data-pagefind-body>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkToc]}
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            components={{
              img({ node, ...props }) {
                const newSrc = props.src ? `${baseUrl}${props.src.split('/').pop()}` : '';

                return <img {...props} src={newSrc} />;
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
