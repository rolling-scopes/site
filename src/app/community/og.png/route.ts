import { PAGE_TYPE, pageStore, resolvePageLocale } from '@/entities/page';
import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export { DYNAMIC as dynamic } from '@/shared/constants';

export async function GET() {
  const locale = resolvePageLocale();
  const { seoOgImageTitle: title, seoOgImageDescription: description } =
    await pageStore.loadPage(PAGE_TYPE.COMMUNITY, locale);

  return createPageTree({
    title,
    description,
  });
}
