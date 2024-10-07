import { ImageType } from '@/shared/ui/image/image';
import { type ListData } from '@/shared/ui/list';

export interface Stage {
  id: number | string;
  title: string;
  description?: string;
  logoIcon?: ImageType;
  links?: {
    href: string;
    linkTitle: string;
    isActive?: boolean;
  }[];
  topics?: string[];
  imageSrc?: ImageType;
  list?: ListData;
}

export interface StageCardProps extends Stage {
  marked?: boolean;
}
