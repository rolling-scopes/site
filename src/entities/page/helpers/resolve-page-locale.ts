import { LOCALE_MAP } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';

/**
 * Resolves the page locale based on the given language code.
 *
 * @param {string} lang - The language from the route.
 * @return {string} The resolved locale, either 'ru' or 'en-US'.
 */
export function resolvePageLocale(lang: string = 'en'): ApiResourceLocale {
  return LOCALE_MAP.get(lang) ?? 'en-US';
}
