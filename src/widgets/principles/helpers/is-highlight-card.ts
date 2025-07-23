import { TypeHighlightCardWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isHighlightCard<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeHighlightCardWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'highlightCard';
}
