import {
  TypeExternalEmbedContentWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isExternalEmbedContent(
  section: TypeExternalEmbedContentWithoutUnresolvableLinksResponse | BaseEntry,
): section is TypeExternalEmbedContentWithoutUnresolvableLinksResponse {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.EXTERNAL_EMBED_CONTENT;
}
