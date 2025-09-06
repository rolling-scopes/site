import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { TypeSocialLinkWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformSocialLink(
  section: TypeSocialLinkWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const link = section.fields.link;
  const label = section.fields.label;
  const icon = section.fields.icon?.fields
    ? prepareAssetImage(section.fields.icon.fields.file)
    : undefined;

  return {
    id,
    name,
    data: {
      link,
      label,
      icon,
    },
  };
}
