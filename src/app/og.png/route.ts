import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export const preferredRegion = 'auto';
export const dynamic = 'force-static';

export async function GET() {
  const title = 'Home';
  const description = 'Free, community-driven IT education for future developers.';

  return createPageTree({
    title,
    description,
  });
}
