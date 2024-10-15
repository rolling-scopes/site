import type { ListData, ListType } from '@/shared/types';

export interface Stage {
  id: number | string;
  title: string;
  description?: string;
  logoIcon?: string;
  links?: {
    href: string;
    linkTitle: string;
    isActive?: boolean;
  }[];
  topics?: string[];
  imageSrc?: string;
  list?: ListData;
}

export interface StageCardProps extends Stage {
  type?: ListType;
}
