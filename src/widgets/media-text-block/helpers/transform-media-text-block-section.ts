import { WIDGET_TITLE_MOD_MAP, WIDGET_TITLE_SIZE_MAP } from '@/shared/constants';
import { getSectionId } from '@/shared/helpers/get-section-id';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaTextBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformMediaTextBlockSection(
  section: TypeMediaTextBlockWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const titleSize = WIDGET_TITLE_SIZE_MAP.get(section.fields.titleSize);
  const titleMod = WIDGET_TITLE_MOD_MAP.get(section.fields.titleMod);
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
    },
  };
}
