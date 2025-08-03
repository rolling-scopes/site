import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export { PREFERRED_REGION as preferredRegion, DYNAMIC as dynamic } from '@/shared/constants';

export async function GET() {
  const title = 'Community';
  const description = 'Join the RS School developer community.';

  return createPageTree({
    title,
    description,
  });
}
