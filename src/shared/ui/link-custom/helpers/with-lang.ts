import { ROUTES } from '@/shared/constants';

export function withLang(lang: string, path: string) {
  const split = path.split('/');

  split.unshift(lang);
  const preparedPath = split.filter(Boolean).join('/');

  return path === ROUTES.HOME ? `/${lang}` : `/${preparedPath}`;
}
