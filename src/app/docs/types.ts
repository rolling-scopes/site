type MenuItem = {
  title: string;
  link?: string;
  items?: MenuItem[];
};

type Menu = MenuItem[];

export type { Menu };
