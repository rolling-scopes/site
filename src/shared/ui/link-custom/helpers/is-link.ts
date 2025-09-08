import { TypeLinkWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isLink<TSection extends TypeLinkWithoutUnresolvableLinksResponse | BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeLinkWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.LINK;
}
