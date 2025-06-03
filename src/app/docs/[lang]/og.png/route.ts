import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';

export const dynamic = 'force-static';
export const preferredRegion = 'auto';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

type Lang = 'en' | 'ru';

const titleMap: Record<Lang, string> = {
  en: 'RS School Docs',
  ru: 'RS School Docs',
};

const descriptionMap: Record<Lang, string> = {
  en: 'RS School Docs: rules, guides, FAQs.',
  ru: 'Документация RS: правила, гайды, часто задаваемые вопросы.',
};

export async function GET(_: never, {
  params,
}: {
  params: { lang: Lang };
}) {
  const lang = params.lang;

  return createPageTree({
    title: titleMap[lang],
    description: descriptionMap[lang],
  });
}
