import { ReactNode } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, INLINES, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';

import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { LinkCustom } from '@/shared/ui/link-custom';
import { ContentList } from '@/shared/ui/list/content-list';
import { ListItem } from '@/shared/ui/list/list-item';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { SectionResolver } from '@/views/course/section-resolver';

type RichTextDocument = Parameters<typeof documentToReactComponents>['0'];
type RichTextOptions = Parameters<typeof documentToReactComponents>['1'];

const RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => {
      if (!children) {
        return null;
      }

      // hack to prevent rendering an empty trailing paragraph
      const isEmptyNode = children.toString().trim() === '';

      return isEmptyNode ? '' : <Paragraph>{children}</Paragraph>;
    },
    [BLOCKS.HEADING_3]: (_node: Block | Inline, children: ReactNode) => (
      <Subtitle>{children}</Subtitle>
    ),
    [BLOCKS.UL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ContentList>{children}</ContentList>
    ),
    [BLOCKS.OL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ContentList ordered>{children}</ContentList>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: ReactNode) => (
      <ListItem>{children}</ListItem>
    ),
    [INLINES.HYPERLINK]: (node: Inline | Block, children: ReactNode) => (
      <LinkCustom external={isExternalUri(node.data.uri)} href={node.data.uri}>
        {children}
      </LinkCustom>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Inline | Block) => {
      const src = prepareAssetImage(node.data.target.fields.file);
      const alt = node.data.target.fields.title;

      return <Image data-id="asset-image" src={src} alt={alt} />;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Inline | Block) => {
      const [section] = transformPageSections([node.data.target]);

      return <SectionResolver embedded section={section} courseEnrollUrl="" />;
    },
  },
};

export function richTextRenderer(
  document: RichTextDocument,
  options: RichTextOptions = RICH_TEXT_OPTIONS,
) {
  return documentToReactComponents(document, options);
}
