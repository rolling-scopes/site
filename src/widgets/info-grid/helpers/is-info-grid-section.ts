import { TypeInfoGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isInfoGridSection<
  TSection extends TypeInfoGridWithoutUnresolvableLinksResponse | BaseEntry,
>(section: TSection): section is Extract<TSection, TypeInfoGridWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.INFO_GRID;
}
