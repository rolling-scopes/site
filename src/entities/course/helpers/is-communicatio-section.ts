import { TypeCommunicationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isCommunicationSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeCommunicationWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'communication';
}
