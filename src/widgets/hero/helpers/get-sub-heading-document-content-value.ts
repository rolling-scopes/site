import { Document } from '@contentful/rich-text-types';

export function getSubHeadingDocumentContentValue(contentDocument: Document) {
  const content = contentDocument.content.at(0)?.content.at(0);

  if (content?.nodeType !== 'text') {
    return undefined;
  }

  return content.value;
}
