/**
 * Resolves the locale of a course page based on the given slug.
 *
 * @param {string} slug - The slug of the course page used to determine the locale.
 * @return {string} The resolved locale, either 'ru' or 'en-US'.
 */
export function resolveCoursePageLocale(slug: string) {
  const isRuLocale = slug.endsWith('ru');

  return isRuLocale ? 'ru' : 'en-US';
}
