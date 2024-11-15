import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import files from '../data.json';
import Search from '../search';

export async function generateMetadata({ params }): Promise<Metadata> {
  console.log(await params);
  const title = 'Courses · The Rolling Scopes School';

  return { title };
}

export async function generateStaticParams() {
  // Fetch the list of available documentation files
  // const res = await fetch('https://api.github.com/repos/spanb4/docs/contents/docs');
  // const files = await res.json();
  // console.log(files)
  return files
    .filter((file) => file.name.endsWith('.md'))
    .map((file) => ({ slug: file.name.replace('.md', '') }));
}

type Params = Promise<{ slug: string[] }>;

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
        className="markdown-body"
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
            remarkPlugins={[remarkGfm, remarkToc]} // Use the remark-gfm plugin
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    );
  } catch (error) {
    notFound(); // Handle errors or 404
  }
}
