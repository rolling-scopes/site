import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeDonationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformDonationSection(
  section: TypeDonationWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const content = section.fields.content ? richTextRenderer(section.fields.content) : undefined;
  const imageSrc = prepareAssetImage(section.fields.image?.fields.file);
  const linkLabelLeft = section.fields.leftButtonLabel;
  const linkUrlLeft = section.fields.leftButtonLink;
  const linkLabelRight = section.fields.rightButtonLabel;
  const linkUrlRight = section.fields.rightButtonLink;
  const linkIconLeft = prepareAssetImage(section.fields.leftButtonIcon?.fields.file);
  const linkIconRight = prepareAssetImage(section.fields.rightButtonIcon?.fields.file);

  return {
    id,
    name,
    data: {
      title,
      content,
      linkLabelLeft,
      linkUrlLeft,
      linkIconLeft,
      linkLabelRight,
      linkUrlRight,
      imageSrc,
      linkIconRight,
    },
  };
}
