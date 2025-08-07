import { TypeDonationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isDonationSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeDonationWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.DONATION;
}
