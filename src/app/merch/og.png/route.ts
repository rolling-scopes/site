import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export { PREFERRED_REGION as preferredRegion, DYNAMIC as dynamic } from '@/shared/constants';

export async function GET() {
  const title = 'Merch';
  const description = 'RS School merch: Stylish, comfy & 100% geek-approved';

  return createPageTree({
    title,
    description,
  });
}
