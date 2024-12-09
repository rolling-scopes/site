import classNames from 'classnames/bind';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkRemoveComments from 'remark-remove-comments';
import remarkToc from 'remark-toc';
import { Menu } from '../../types';
import { DocsMenu } from '../docs-menu/docs-menu';
import { LangSwitcher } from '../lang-switcher/lang-switcher';
import Search from '../search/search';
import { isValidUrl } from '@/shared/helpers/isValidUrl';
import { Language } from '@/shared/types';

import styles from './docs-layout.module.scss';

const cx = classNames.bind(styles);

const baseUrl = 'https://raw.githubusercontent.com/SpaNb4/docs/refs/heads/master/docs/images/';

type DocsLayoutProps = {
  menu: Menu;
  markdownContent: string;
  lang: Language;
};

export function DocsLayout({
  menu,
  markdownContent,
  lang,
}: DocsLayoutProps) {
  return (
    <div className={cx('container', 'docs-layout')}>
      <div className={cx('content', 'menu-wrapper')}>
        <div className={cx('menu')}>
          <DocsMenu menu={menu} lang={lang} />
          <LangSwitcher />
        </div>
      </div>
      <div className={cx('content', 'docs-content')}>
        <Search lang={lang} />
        <div className={cx('markdown-body')} data-pagefind-body>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkToc, [remarkEmoji, { accessible: true }], remarkRemoveComments]}
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            components={{
              img({ _, ...props }) {
                const { src } = props;

                const isExternalImage = isValidUrl(src);
                const newSrc = !isExternalImage && src ? `${baseUrl}${src.split('/').pop()}` : src;

                return <img {...props} src={newSrc} />;
              },
              a({ children, href, ...props }) {
                return (
                  <Link href={href && href.endsWith('.md') ? href.slice(0, -3) : href} {...props}>
                    {children}
                  </Link>
                );
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
