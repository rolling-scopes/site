import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeInfoGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformInfoGridSection(
  section: TypeInfoGridWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const gridItems = section.fields.gridItems.map((item) => ({
    id: item?.sys.id,
    title: item?.fields.title,
    content: item?.fields.contentLeft ? richTextRenderer(item?.fields.contentLeft) : undefined,
  }));
  const size = section.fields.size;
  const titleFontSize = section.fields.titleFontSize;
  const withGap = section.fields.withGap;
  const borderColor = section.fields.borderColor;

  return {
    id,
    name,
    data: {
      gridItems,
      size,
      titleFontSize,
      withGap,
      borderColor,
    },
  };
}
