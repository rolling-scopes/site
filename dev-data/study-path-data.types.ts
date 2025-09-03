type ItemWithLink = {
  id: number;
  text: string;
  title: string;
  link: string;
  external?: boolean;
};

export type LinkList = ItemWithLink[];
