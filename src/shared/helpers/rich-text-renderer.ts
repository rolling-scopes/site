import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { RICH_TEXT_OPTIONS } from '@/shared/constants';

type RichTextDocument = Parameters<typeof documentToReactComponents>['0'];
type RichTextOptions = Parameters<typeof documentToReactComponents>['1'];

export function richTextRenderer(
  document: RichTextDocument,
  options: RichTextOptions = RICH_TEXT_OPTIONS,
) {
  return documentToReactComponents(document, options);
}
