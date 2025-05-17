import { transformGridItems } from '@/entities/course/helpers/transform-grid-items';
import { Section } from '@/entities/course/types';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformAboutCourseSection(
  section: TypeAboutCourseWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const subTitle = section.fields.subTitle ? richTextRenderer(section.fields.subTitle) : undefined;
  const gridItems = transformGridItems(section.fields.gridItems);
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;

  return {
    id,
    data: {
      title,
      subTitle,
      gridItems,
      registrationLinkText,
      registrationClosedLinkText,
    },
  };
}
