import { createPageTree } from '@/shared/og/view/pages-tree/generate-pages-tree';
import { Language } from '@/shared/types';

export { DYNAMIC as dynamic } from '@/shared/constants';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

const titleMap: Record<Language, string> = {
  en: 'RS School Docs',
  ru: 'RS Документация',
};

const descriptionMap: Record<Language, string> = {
  en: 'RS School Docs: rules, guides, FAQs.',
  ru: 'Документация RS: правила, гайды, часто задаваемые вопросы.',
};

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Language;

  return createPageTree({
    title: titleMap[lang],
    description: descriptionMap[lang],
  });
}
