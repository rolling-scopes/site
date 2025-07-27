import { TypeMediaGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isMediaGridSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeMediaGridWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.MEDIA_GRID;
}
