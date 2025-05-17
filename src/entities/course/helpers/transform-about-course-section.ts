import { transformGridItems } from '@/entities/course/helpers/transform-grid-items';
import { Section } from '@/entities/course/types';
import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { ApiAssets } from '@/shared/types/types';

export function transformAboutCourseSection(
  assets: ApiAssets,
  section: TypeAboutCourseWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const heading = section.fields.title;

  const gridItems = section.fields.gridItems;
  const transformedGridItems = transformGridItems(gridItems, assets);
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;

  return {
    id,
    data: {
      heading,
      gridItems: transformedGridItems,
      registrationLinkText,
      registrationClosedLinkText,
    },
  };
}
