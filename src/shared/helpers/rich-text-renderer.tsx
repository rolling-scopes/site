import { ReactNode } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, INLINES, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';

import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { replaceTextBreaksWithBrTag } from '@/shared/helpers/replace-text-breaks-with-br-tag';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { LinkCustom } from '@/shared/ui/link-custom';
import { ContentList } from '@/shared/ui/list/content-list';
import { ListItem } from '@/shared/ui/list/list-item';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { SectionResolver } from '@/widgets/section-resolver';

type RichTextDocument = Parameters<typeof documentToReactComponents>['0'];
type RichTextOptions = Parameters<typeof documentToReactComponents>['1'];

export const RICH_TEXT_OPTIONS: RichTextOptions = {
  renderText: replaceTextBreaksWithBrTag,
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
      <Subtitle size="small">{children}</Subtitle>
    ),
    [BLOCKS.HEADING_4]: (_node: Block | Inline, children: ReactNode) => (
      <Subtitle as="h4" size="extra-small">
        {children}
      </Subtitle>
    ),
    [BLOCKS.HEADING_6]: (_node: Block | Inline, children: ReactNode) => (
      <Paragraph fontSize="large">{children}</Paragraph>
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

      return (
        <Image
          data-id="asset-image"
          src={src}
          alt={alt}
          style={{
            maxWidth: src.width,
            maxHeight: src.height,
          }}
        />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Inline | Block) => {
      const [section] = transformPageSections([node.data.target]);

      return <SectionResolver embedded section={section} />;
    },
    [INLINES.EMBEDDED_ENTRY]: (node: Inline | Block) => {
      const [section] = transformPageSections([node.data.target]);

      return <SectionResolver embedded inline section={section} />;
    },
  },
};

export const RICH_TEXT_SLIDER_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: () => null,
    [BLOCKS.EMBEDDED_ASSET]: (node: Inline | Block) => {
      const src = prepareAssetImage(node.data.target.fields.file);
      const alt = node.data.target.fields.title;

      return (
        <div style={{ aspectRatio: '8 / 5' }}>
          <Image data-id="asset-image" src={src} alt={alt} fill />
        </div>
      );
    },
  },
};

export function richTextRenderer(
  document: RichTextDocument,
  options: RichTextOptions = RICH_TEXT_OPTIONS,
) {
  return documentToReactComponents(document, options);
}
