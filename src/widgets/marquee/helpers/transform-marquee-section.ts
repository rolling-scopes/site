import { TypeMarqueeWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformMarqueeSection(
  section: TypeMarqueeWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const items = section.fields.marqueeItems;

  return {
    id,
    name,
    data: { items },
  };
}
