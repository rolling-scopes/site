import { BLOCKS, Document } from '@contentful/rich-text-types';

export function isSubHeadingDocumentEmbeddedEntry(contentDocument?: Document) {
  if (!contentDocument) {
    return false;
  }

  return contentDocument.content.at(0)?.nodeType === BLOCKS.EMBEDDED_ENTRY;
}
