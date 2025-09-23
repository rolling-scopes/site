import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkRemoveComments from 'remark-remove-comments';
import remarkToc from 'remark-toc';

import { GITHUB_RAW_ROOT } from '../../constants';
import { isValidUrl } from '@/shared/helpers/is-valid-url';

const GITHUB_IMAGE_BASE = `${GITHUB_RAW_ROOT}/images`;

type DocsContentProps = {
  markdownContent: string;
  lang: string;
};

export function DocsContent({ markdownContent, lang }: DocsContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        remarkToc,
        [remarkEmoji, { accessible: true }],
        remarkRemoveComments,
      ]}
      rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
      components={{
        img({ src = '', ...props }) {
          if (typeof src !== 'string') {
            throw new Error("The 'src' prop must be a string URL.");
          }

          const isExternalImage = isValidUrl(src);
          const newSrc =
            !isExternalImage && src ? `${GITHUB_IMAGE_BASE}/${src.split('/').pop()}` : src;

          return <img {...props} src={newSrc} />;
        },
        a({ children, href = '', ...props }) {
          let newHref = href;

          if (href.endsWith('.md')) {
            newHref = href.slice(0, -3);
          }

          if (
            href.startsWith('https://docs.rs.school')
            && !(href.endsWith('.png') || href.endsWith('.jpg'))
          ) {
            const transformedHref = href.replace('?id=', '#');
            const lastPathSegment = transformedHref.split('/').pop();

            newHref = `/docs/${lang}/${lastPathSegment}`;
          }

          return (
            <Link href={newHref} {...props}>
              {children}
            </Link>
          );
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}
