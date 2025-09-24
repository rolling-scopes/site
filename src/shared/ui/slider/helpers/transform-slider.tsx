import { ReactNode } from 'react';

import { RICH_TEXT_SLIDER_OPTIONS, richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeSliderWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformSlider(section: TypeSliderWithoutUnresolvableLinksResponse): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const slides = (
    richTextRenderer(section.fields.slides, { options: RICH_TEXT_SLIDER_OPTIONS }) as ReactNode[]
  ).filter(Boolean);

  return {
    id,
    name,
    data: { slides },
  };
}
