import resolveResponse from 'contentful-resolve-response';

/**
 * Transforms the given content into a typed response by resolving it.
 *
 * @param {unknown} content - The content to be processed and resolved.
 * @return {TContent} The resolved content cast to the specified type.
 */
export function prepareContentfulResponse<TContent>(content: unknown): TContent {
  return resolveResponse(content);
}
