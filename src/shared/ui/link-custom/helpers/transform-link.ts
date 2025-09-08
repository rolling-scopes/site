import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { TypeLinkWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformLink(section: TypeLinkWithoutUnresolvableLinksResponse): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const variant = section.fields.variant;
  const label = section.fields.label;
  const disabledLabel = section.fields.disabledLabel;
  const link = section.fields.link;
  const icon = section.fields.icon?.fields
    ? prepareAssetImage(section.fields.icon.fields.file)
    : undefined;

  return {
    id,
    name,
    data: {
      variant,
      disabledLabel,
      label,
      link,
      icon,
    },
  };
}
