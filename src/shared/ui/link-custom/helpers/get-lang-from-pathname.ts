import { LANG_FORMAT_LENGTH } from '@/shared/ui/link-custom/constants';

/**
 * Extracts the language code from the given pathname.
 *
 * @param {string} pathName - The URL pathname (e.g. "/ua/community", "/en/about", "/").
 * @returns {string} The first path segment if its length matches `LANG_FORMAT_LENGTH`,
 *                   otherwise an empty string.
 *
 * @example
 * getLangFromPathname("/ua/community"); // "ua"
 * getLangFromPathname("/en");           // "en"
 * getLangFromPathname("/");             // ""
 */
export function getLangFromPathname(pathName: string) {
  const firstPath = pathName.split('/').filter(Boolean).at(0);

  return firstPath?.length === LANG_FORMAT_LENGTH ? firstPath : '';
}
