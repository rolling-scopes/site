import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import { ApiMediaGridSectionSettings } from '@/widgets/media-grid/types';

export function transformMediaGridSection(
  section: TypeMediaGridWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const description = section.fields.description
    ? richTextRenderer(section.fields.description)
    : undefined;
  const media = richTextRenderer(section.fields.media);
  const settings = section.fields.settings as ApiMediaGridSectionSettings;
  const numberOfColumns = settings?.numberOfColumns;
  const removeItemsOnResponsive = settings?.removeItemsOnResponsive;
  const rowGapPx = settings?.rowGapPx;

  return {
    id,
    name,
    data: {
      title,
      description,
      media,
      numberOfColumns,
      removeItemsOnResponsive,
      rowGapPx,
    },
  };
}
