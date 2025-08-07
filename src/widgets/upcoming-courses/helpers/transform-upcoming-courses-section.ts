import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { TypeUpcomingCoursesWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformUpcomingCoursesSection(
  section: TypeUpcomingCoursesWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const imageSrc = section.fields.image
    ? prepareAssetImage(section.fields.image.fields.file)
    : undefined;
  const linkLabel = section.fields.linkLabel;
  const linkUrl = section.fields.linkUrl;

  return {
    id,
    name,
    data: {
      title,
      linkLabel,
      linkUrl,
      imageSrc,
    },
  };
}
