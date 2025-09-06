import type {
  TypeExternalEmbedContentWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformExternalEmbedContent(
  section: TypeExternalEmbedContentWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const type = section.fields.type;

  return {
    id,
    name,
    data: { type },
  };
}
