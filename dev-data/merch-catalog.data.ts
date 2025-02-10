import { StaticImageData } from 'next/image';

import hoodieRs from '@/shared/assets/merch/hoodie/hoodie-rs/rs-hoodie-sample.png';
import hoodieRsConfTashkent22 from '@/shared/assets/merch/hoodie/hoodie-rs-conf-tashkent-22/hoodie-rs-conf-tashkent-22.png';
import hoodieRsMentor from '@/shared/assets/merch/hoodie/hoodie-rs-mentor/rs-hoodie-lt.jpg';

type MerchCategory = 't-shirt' | 'hoodie' | 'cups' | 'sticker' | 'sloths';

export type Merch = {
  id: string;
  title: string;
  category: MerchCategory;
  imageUrl: StaticImageData[];
  downloadUrl: string;
};
export const merchCatalog: Merch[] = [
  {
    id: 'h001',
    title: 'Hoodie RS Mentor',
    category: 'hoodie',
    imageUrl: [hoodieRsMentor],
    downloadUrl: '@/shared/assets/merch/hoodie/hoodie-rs-mentor/hoodie-rs-mentor.zip',
  },
  {
    id: 'h002',
    title: 'Hoodie RS',
    category: 'hoodie',
    imageUrl: [hoodieRs],
    downloadUrl: '@/shared/assets/merch/hoodie/hoodie-rs/hoodie-rs.zip',
  },
  {
    id: 'h003',
    title: 'Hoodie RS Conf Tashkent 2022',
    category: 'hoodie',
    imageUrl: [hoodieRsConfTashkent22],
    downloadUrl:
      '@/shared/assets/merch/hoodie/hoodie-rs-conf-tashkent-22/hoodie-rs-conf-tashkent-22.zip',
  },
];
