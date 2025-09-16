import { StaticImageData } from 'next/image';

import { LinkCustomVariants } from '@/shared/ui/link-custom/link-custom';

export type LinkData = {
  label: string;
  disabledLabel: string;
  variant: LinkCustomVariants['variant'] | 'social';
  link: string;
  iconLeft?: StaticImageData;
  iconRight?: StaticImageData;
};
