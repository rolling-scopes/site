/**
 * Generates the section id for the give section name
 *
 * @param name {SectionName} - The name of the section.
 * @returns {string}
 * @example
 * // "About Course" → "about-course"
 * // Mentors wanted! → "mentors-wanted"
 */
export function getSectionId(name?: string) {
  if (!name) {
    return '';
  }

  return name.toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
