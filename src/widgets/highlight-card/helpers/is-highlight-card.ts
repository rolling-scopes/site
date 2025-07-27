import { TypeHighlightCardWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isHighlightCard<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeHighlightCardWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.HIGHLIGHT_CARD;
}
