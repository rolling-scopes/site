import { ReactNode } from 'react';

import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeSlideWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformSlide(section: TypeSlideWithoutUnresolvableLinksResponse): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const variant = section.fields.variant;
  const title = section.fields.title;
  const subTitle = section.fields.subTitle;
  const content = section.fields.content
    ? (richTextRenderer(section.fields.content) as ReactNode[])
    : section.fields.content;
  const icon = prepareAssetImage(section.fields.icon?.fields.file);

  return {
    id,
    name,
    data: {
      variant,
      title,
      subTitle,
      content,
      icon,
    },
  };
}
