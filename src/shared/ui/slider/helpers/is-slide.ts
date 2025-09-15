import { TypeSlideWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isSlide<TSection extends TypeSlideWithoutUnresolvableLinksResponse | BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeSlideWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.SLIDE;
}
