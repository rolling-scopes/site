import { TypeMarqueeWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isMarqueeSection<
  TSection extends TypeMarqueeWithoutUnresolvableLinksResponse | BaseEntry,
>(section: TSection): section is Extract<TSection, TypeMarqueeWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.MARQUEE;
}
