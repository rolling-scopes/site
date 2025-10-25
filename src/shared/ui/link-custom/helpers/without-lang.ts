import { getLangFromPathname } from '@/shared/ui/link-custom/helpers/get-lang-from-pathname';

export function withoutLang(path: string) {
  const lang = getLangFromPathname(path);
  const preparedPath = path.replace(lang, '');

  return preparedPath;
}
