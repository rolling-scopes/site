import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export const preferredRegion = 'auto';
export const dynamic = 'force-static';

export async function GET() {
  const title = 'Courses';
  const description = 'Free RS School courses: JavaScript, React, Node.js, AWS, and more.';

  return createPageTree({
    title,
    description,
  });
}
