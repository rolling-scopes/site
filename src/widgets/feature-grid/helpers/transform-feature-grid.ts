import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import { transformFeatureItems } from '@/widgets/feature-grid/helpers/transform-feature-items';

export function transformFeatureGrid(
  section: TypeAboutCourseWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const gridItems = transformFeatureItems(section.fields.gridItems);

  return {
    id,
    name,
    data: { gridItems },
  };
}
