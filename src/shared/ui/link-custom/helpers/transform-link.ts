import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { TypeLinkWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformLink(section: TypeLinkWithoutUnresolvableLinksResponse): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const type = section.fields.type;
  const variant = section.fields.variant;
  const label = section.fields.label;
  const disabledLabel = section.fields.disabledLabel;
  const link = section.fields.link;
  const iconLeft = section.fields.iconLeft?.fields
    ? prepareAssetImage(section.fields.iconLeft.fields.file)
    : undefined;
  const iconRight = section.fields.iconRight?.fields
    ? prepareAssetImage(section.fields.iconRight.fields.file)
    : undefined;

  return {
    id,
    name,
    data: {
      type,
      variant,
      disabledLabel,
      label,
      link,
      iconLeft,
      iconRight,
    },
  };
}
