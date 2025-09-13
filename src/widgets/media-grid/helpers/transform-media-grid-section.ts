import { CSSProperties } from 'react';

import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import { ApiMediaGridSectionSettings } from '@/widgets/media-grid/types';

export function transformMediaGridSection(
  section: TypeMediaGridWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const media = richTextRenderer(section.fields.media);
  const { numberOfColumns, removeItemsOnResponsive, rowGapPx, colGapPx, fitContent, ...settings } =
    section.fields.settings as ApiMediaGridSectionSettings;

  return {
    id,
    name,
    data: {
      media,
      numberOfColumns,
      removeItemsOnResponsive,
      rowGapPx,
      fitContent,
      colGapPx,
      settings: settings as CSSProperties,
    },
  };
}
