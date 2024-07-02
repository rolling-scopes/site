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
  actions?: string[];
  imageSrc?: string;
}

export interface StageCardProps extends Stage {
  marked?: boolean;
}
