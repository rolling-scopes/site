import { Menu } from '../types';
import { Language } from '@/shared/types';

export const fetchMenu = async (lang: Language): Promise<Menu> => {
  const data = await fetch(
    `https://raw.githubusercontent.com/SpaNb4/docs/refs/heads/master/docs/${lang}/docsMenu_${lang}.json`,
  );

  return await data.json();
};
