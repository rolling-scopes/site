import { StaticImageData } from 'next/image';
import type { ListData, ListType } from '@/shared/types.ts';

export type Stage = {
  id: number | string;
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
};

export type StageCardProps = Stage & {
  type?: ListType;
};
