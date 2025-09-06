import { TypeSliderWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isSlider<TSection extends TypeSliderWithoutUnresolvableLinksResponse | BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeSliderWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.SLIDER;
}
