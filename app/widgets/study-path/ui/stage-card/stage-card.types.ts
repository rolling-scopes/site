import { type ListData } from '@/shared/ui/list';

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
  marked?: boolean;
}
