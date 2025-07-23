import { WIDGET_TITLE_SIZE_MAP } from '@/shared/constants';
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
  const contentLeft = section.fields.contentLeft
    ? richTextRenderer(section.fields.contentLeft)
    : undefined;
  const contentRight = section.fields.contentRight
    ? richTextRenderer(section.fields.contentRight)
    : undefined;
  const linkUrl = section.fields.linkUrl;
  const linkLabel = section.fields.linkLabel;
  const disabledLinkLabel = section.fields.disabledLinkLabel;
  const backgroundColor = section.fields.backgroundColor;

  return {
    id,
    name,
    data: {
      title,
      titleSize,
      contentLeft,
      contentRight,
      linkUrl,
      linkLabel,
      disabledLinkLabel,
      backgroundColor,
    },
  };
}
