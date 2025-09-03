import { TypeVideoBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformVideoBlockSection(
  section: TypeVideoBlockWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const url = section.fields.url;
  const videoTitle = section.fields.videoTitle;

  return {
    id,
    name,
    data: {
      title,
      url,
      videoTitle,
    },
  };
}
