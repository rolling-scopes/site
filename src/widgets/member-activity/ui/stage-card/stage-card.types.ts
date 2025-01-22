import { StaticImageData } from 'next/image';

import type { ListData, ListType } from '@/shared/types';

export interface Stage {
  id?: number | string;
  title: string;
  description?: string;
  logoIcon?: StaticImageData;
  links?: {
    href: string;
    linkTitle: string;
    isActive?: boolean;
  }[];
  topics?: string[];
  imageSrc?: StaticImageData;
  list?: ListData;
}

export interface StageCardProps extends Stage {
  type?: ListType;
}
