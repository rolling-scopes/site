import { StaticImageData } from 'next/image';

import { LINK_TYPE } from '@/shared/ui/link-custom/constants';
import { LinkCustomVariants } from '@/shared/ui/link-custom/link-custom';

type LinkType = typeof LINK_TYPE[keyof typeof LINK_TYPE];

export type LinkData = {
  type: LinkType;
  label: string;
  variant: LinkCustomVariants['variant'] | 'social';
  disabledLabel?: string;
  link?: string;
  iconLeft?: StaticImageData;
  iconRight?: StaticImageData;
};
