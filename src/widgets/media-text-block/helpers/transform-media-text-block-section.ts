import { getSectionId } from '@/shared/helpers/get-section-id';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaTextBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import type { ApiMediaTextBlockSettings } from '@/widgets/media-text-block';

export function transformMediaTextBlockSection(
  section: TypeMediaTextBlockWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const titleSize = section.fields.titleSize;
  const titleMod = section.fields.titleModification;
  const sectionLabel = section.fields.sectionLabel;
  const contentLeft = section.fields.contentLeft
    ? richTextRenderer(section.fields.contentLeft)
    : undefined;
  const contentRight = section.fields.contentRight
    ? richTextRenderer(section.fields.contentRight)
    : undefined;
  const contentBottom = section.fields.contentBottom
    ? richTextRenderer(section.fields.contentBottom)
    : undefined;
  const linkUrl = section.fields.linkUrl;
  const linkLabel = section.fields.linkLabel;
  const disabledLinkLabel = section.fields.disabledLinkLabel;
  const backgroundColor = section.fields.backgroundColor;
  const anchorId = getSectionId(section.fields.title);
  const settings = section.fields.settings as ApiMediaTextBlockSettings;
  const imageAbsolutePosition = settings?.imageAbsolutePosition;
  const width = settings?.width;

  return {
    id,
    name,
    data: {
      anchorId,
      title,
      titleSize,
      titleMod,
      sectionLabel,
      contentLeft,
      contentRight,
      contentBottom,
      linkUrl,
      linkLabel,
      disabledLinkLabel,
      backgroundColor,
      imageAbsolutePosition,
      width,
    },
  };
}
