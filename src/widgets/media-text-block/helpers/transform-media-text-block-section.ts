import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaTextBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/views/course/types';

export function transformMediaTextBlockSection(
  section: TypeMediaTextBlockWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const contentLeft = section.fields.contentLeft
    ? richTextRenderer(section.fields.contentLeft)
    : section.fields.contentLeft;
  const contentRight = section.fields.contentRight
    ? richTextRenderer(section.fields.contentRight)
    : section.fields.contentRight;
  const linkUrl = section.fields.linkUrl;
  const linkLabel = section.fields.linkLabel;
  const disabledLinkLabel = section.fields.disabledLinkLabel;
  const backgroundColor = section.fields.backgroundColor;

  return {
    id,
    name,
    data: {
      title,
      contentLeft,
      contentRight,
      linkUrl,
      linkLabel,
      disabledLinkLabel,
      backgroundColor,
    },
  };
}
