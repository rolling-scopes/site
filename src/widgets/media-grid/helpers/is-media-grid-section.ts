import { TypeMediaGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isMediaGridSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeMediaGridWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'mediaGrid';
}
