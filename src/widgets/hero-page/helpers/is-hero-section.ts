import { TypeHeroSectionWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isHeroSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeHeroSectionWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'heroSection';
}
