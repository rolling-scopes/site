import { TypeHeroSectionWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isHeroSection<TSection extends BaseEntry | string>(
  section: TSection,
): section is Extract<TSection, TypeHeroSectionWithoutUnresolvableLinksResponse> {
  if (typeof section === 'string') {
    return section === 'heroSection';
  }

  return section?.sys?.contentType?.sys?.id === 'heroSection';
}
