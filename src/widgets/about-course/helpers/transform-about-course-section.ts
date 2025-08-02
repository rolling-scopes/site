import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import { transformGridItems } from '@/widgets/about-course/helpers/transform-grid-items';

export function transformAboutCourseSection(
  section: TypeAboutCourseWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const subTitle = section.fields.subTitle ? richTextRenderer(section.fields.subTitle) : undefined;
  const gridItems = transformGridItems(section.fields.gridItems);
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;

  return {
    id,
    name,
    data: {
      title,
      subTitle,
      gridItems,
      registrationLinkText,
      registrationClosedLinkText,
    },
  };
}
