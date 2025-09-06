import { ReactNode } from 'react';

import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeHeroSectionWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import {
  getSubHeadingDocumentContentValue,
} from '@/widgets/hero/helpers/get-sub-heading-document-content-value';
import {
  isSubHeadingDocumentEmbeddedEntry,
} from '@/widgets/hero/helpers/is-sub-heading-document-embedded-entry';

export function transformHeroSection(
  section: TypeHeroSectionWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const variant = section.fields.variant;
  const heading = section.fields.heading;
  let subHeading: string | ReactNode = section.fields.subHeading
    ? getSubHeadingDocumentContentValue(section.fields.subHeading)
    : undefined;

  if (isSubHeadingDocumentEmbeddedEntry(section.fields.subHeading)) {
    subHeading = section.fields.subHeading
      ? richTextRenderer(section.fields.subHeading)
      : undefined;
  }

  const topHeading = section.fields.topHeading;
  const image =
    section.fields.image?.fields?.file && prepareAssetImage(section.fields.image?.fields?.file);

  return {
    id,
    name,
    data: {
      variant,
      heading,
      subHeading,
      topHeading,
      image,
    },
  };
}
