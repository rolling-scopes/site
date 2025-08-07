import { TypeHeroSectionWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isHeroSection<TSection extends BaseEntry | string>(
  section: TSection,
): section is Extract<TSection, TypeHeroSectionWithoutUnresolvableLinksResponse> {
  if (typeof section === 'string') {
    return section === SECTION_TYPE.HERO;
  }

  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.HERO;
}
