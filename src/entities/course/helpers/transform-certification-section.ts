import { Section } from '@/entities/course/types';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeCertificationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformCertificationSection(
  section: TypeCertificationWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const content = richTextRenderer(section.fields.content);

  return {
    id,
    data: {
      title,
      content,
    },
  };
}
