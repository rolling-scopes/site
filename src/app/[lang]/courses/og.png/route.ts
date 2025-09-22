import { PAGE_TYPE, pageStore, resolvePageLocale } from '@/entities/page';
import { generateLangParams } from '@/entities/page/helpers/generate-lang-params';
import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export { DYNAMIC as dynamic } from '@/shared/constants';

export const generateStaticParams = generateLangParams;

export async function GET(_request: Request, { params }: { params: PageProps<'/[lang]/courses'>['params'] }) {
  const { lang } = await params;
  const locale = resolvePageLocale(lang);
  const { seoOgImageTitle: title, seoOgImageDescription: description } =
    await pageStore.loadPage(PAGE_TYPE.COURSES, locale);

  return createPageTree({
    title,
    description,
  });
}
