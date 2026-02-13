import { ROUTES } from '@/shared/constants';

export function withLang(lang: string, path: string) {
  if (lang === 'en') {
    return path;
  }

  if (/^\/[a-z]{2}(\/|$)/.test(path)) {
    return path;
  }

  if (path === ROUTES.HOME) {
    return `/${lang}`;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `/${lang}${cleanPath}`;
}
