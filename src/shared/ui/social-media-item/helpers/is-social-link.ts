import { TypeSocialLinkWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isSocialLink<
  TSection extends TypeSocialLinkWithoutUnresolvableLinksResponse | BaseEntry,
>(section: TSection): section is Extract<TSection, TypeSocialLinkWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.SOCIAL_LINK;
}
