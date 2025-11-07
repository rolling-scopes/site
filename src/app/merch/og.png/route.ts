import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export const dynamic = 'force-static';

export async function GET() {
  const title = 'Merch';
  const description = 'RS School merch: Stylish, comfy & 100% geek-approved';

  return createPageTree({
    title,
    description,
  });
}
