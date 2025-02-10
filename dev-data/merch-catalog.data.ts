import { StaticImageData } from 'next/image';

type MerchCategory = 't-shirt' | 'hoodie' | 'cups' | 'sticker' | 'sloths';

export type Merch = {
  id: string;
  title: string;
  description: string;
  category: MerchCategory;
  imageUrl: StaticImageData[];
  downloadUrl: string;
};
export const merchCatalog: Merch[] = [];
