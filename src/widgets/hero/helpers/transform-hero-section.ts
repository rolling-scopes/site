import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { TypeHeroSectionWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformHeroSection(
  section: TypeHeroSectionWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const heading = section.fields.heading;
  const subHeading = section.fields.subHeading;
  const topHeading = section.fields.topHeading;
  const image =
    section.fields.image?.fields?.file && prepareAssetImage(section.fields.image?.fields?.file);

  return {
    id,
    name,
    data: {
      heading,
      subHeading,
      topHeading,
      image,
    },
  };
}
