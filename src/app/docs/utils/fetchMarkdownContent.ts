import { GITHUB_RAW_ROOT } from '../constants';

export async function fetchMarkdownContent(lang: string, slug: string[] = ['README']): Promise<string> {
  let fileUrl;

  // handling cases with nested folders
  if (slug.length > 1) {
    fileUrl = `${GITHUB_RAW_ROOT}/${lang}/${slug[0]}/${slug[1]}.md`;
  } else {
    fileUrl = `${GITHUB_RAW_ROOT}/${lang}/${slug[0]}.md`;
  }

  const res = await fetch(fileUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch markdown file');
  }

  return await res.text();
}
