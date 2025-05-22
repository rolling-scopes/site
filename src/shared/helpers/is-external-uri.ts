/**
 * Determines if a given link is an external link.
 *
 * @param {string} link - The URL or path to analyze.
 * @return {boolean} Returns true if the link starts with "http", indicating it is an external link; otherwise, false.
 */
export function isExternalUri(link: string) {
  return link.startsWith('http');
}
