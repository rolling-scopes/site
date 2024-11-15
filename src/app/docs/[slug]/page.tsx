import classNames from 'classnames/bind';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import docsMenu from '../docsMenu.json';
import Search from '../search';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;

  const titles = docsMenu.flatMap((section) => {
    if (section.items) {
      return section.items.map((item) => ({
        slug: item.link,
        title: item.title,
      }));
    }

    return [
      {
        slug: section.link,
        title: section.title,
      },
    ];
  });

  const title = titles.find((el) => el.slug === slug)?.title;

  return { title };
}

export async function generateStaticParams() {
  // TODO REPLACE IT WITH FETCHING FROM REMOTE
  return docsMenu.flatMap((section) => {
    if (section.items) {
      return section.items.map((item) => ({ slug: item.link }));
    }

    return [{ slug: section.link }];
  });
}

export default async function DocPage({ params }: { params: Params }) {
  const { slug } = await params;

  const fileUrl = `https://raw.githubusercontent.com/spanb4/docs/master/docs/${slug}.md`;

  try {
    const res = await fetch(fileUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch markdown file');
    }

    const markdownContent = await res.text();

    return (
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
    );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}
