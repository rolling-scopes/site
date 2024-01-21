export type StageCardProps = {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: { href: string; linkTitle: string; isActive?: boolean }[];
};
