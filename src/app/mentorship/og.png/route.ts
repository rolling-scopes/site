import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export { DYNAMIC as dynamic } from '@/shared/constants';

export async function GET() {
  const title = 'Mentorship';
  const description = 'Mentor at RS School and help others grow.';

  return createPageTree({
    title,
    description,
  });
}
