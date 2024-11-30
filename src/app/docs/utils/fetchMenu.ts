import { Language } from '@/shared/types';

export const fetchMenu = async (lang: Language) => {
  const data = await fetch(
    `https://raw.githubusercontent.com/SpaNb4/docs/refs/heads/master/docs/${lang}/docsMenu_${lang}.json`,
    { cache: 'force-cache' },
  );

  return await data.json();
};
