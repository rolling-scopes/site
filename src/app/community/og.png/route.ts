import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export const preferredRegion = 'auto';
export const dynamic = 'force-static';

export async function GET() {
  const title = 'Community';
  const description = 'Join the RS School developer community.';

  return createPageTree({
    title,
    description,
  });
}
