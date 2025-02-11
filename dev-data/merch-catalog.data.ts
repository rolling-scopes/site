import { StaticImageData } from 'next/image';

import drinkCoffeeBlack from '@/shared/assets/merch/cups/drink-coffee-black/drink-coffee-black.png';
import drinkCoffeeYellowDrink from '@/shared/assets/merch/cups/drink-coffee-yellow/drink-coffee-yellow-drink.png';
import drinkCoffeeYellowRs from '@/shared/assets/merch/cups/drink-coffee-yellow/drink-coffee-yellow-rs.png';
import rollingscopesAwesomeFeedbackCup from '@/shared/assets/merch/cups/rollingscopes-awesome-feedback/rollingscopes-awesome-feedback.png';
import rollingscopesMentorCup from '@/shared/assets/merch/cups/rollingscopes-mentor/rollingscopes-mentor.png';
import rsCup from '@/shared/assets/merch/cups/rs-cup/rs-cup.png';
import rsJsMentorCup from '@/shared/assets/merch/cups/rs-javascript-mentor/rs-javascript-mentor.jpg';
import hoodieRs from '@/shared/assets/merch/hoodie/hoodie-rs/hoodie-rs.png';
import hoodieRsConfTashkent22 from '@/shared/assets/merch/hoodie/hoodie-rs-conf-tashkent-22/hoodie-rs-conf-tashkent-22.png';
import hoodieRsMentor from '@/shared/assets/merch/hoodie/hoodie-rs-mentor/hoodie-rs-mentor.jpg';

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
  {
    id: 'c001',
    title: 'Thermo Cup RS Drink Coffee Black',
    category: 'cups',
    imageUrl: [drinkCoffeeBlack],
    downloadUrl: '@/shared/assets/merch/thermo-cups/drink-coffee-black/drink-coffee-black.zip',
  },
  {
    id: 'c002',
    title: 'Thermo Cup RS Drink Coffee Yellow',
    category: 'cups',
    imageUrl: [drinkCoffeeYellowRs, drinkCoffeeYellowDrink],
    downloadUrl: '@/shared/assets/merch/thermo-cups/drink-coffee-yellow/drink-coffee-yellow.zip',
  },
  {
    id: 'c003',
    title: 'Thermo Cup RS',
    category: 'cups',
    imageUrl: [rsCup],
    downloadUrl: '@/shared/assets/merch/thermo-cups/rs-cup/rs-cup.zip',
  },
  {
    id: 'c004',
    title: 'Thermo Cup RS JS Mentor',
    category: 'cups',
    imageUrl: [rsJsMentorCup],
    downloadUrl: '@/shared/assets/merch/thermo-cups/rs-javascript-mentor/rs-javascript-mentor.zip',
  },
  {
    id: 'c005',
    title: 'Cup Rollingscopes Awesome Feedback',
    category: 'cups',
    imageUrl: [rollingscopesAwesomeFeedbackCup],
    downloadUrl:
      '@/shared/assets/merch/cups/rollingscopes-awesome-feedback/rollingscopes-awesome-feedback.zip',
  },
  {
    id: 'c006',
    title: 'The Rollingscopes Mentor',
    category: 'cups',
    imageUrl: [rollingscopesMentorCup],
    downloadUrl: '@/shared/assets/merch/cups/rollingscopes-mentor/rollingscopes-mentor.zip',
  },
];
