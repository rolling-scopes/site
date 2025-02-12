import { StaticImageData } from 'next/image';

import drinkCoffeeBlack from '@/shared/assets/merch/cups/drink-coffee-black/drink-coffee-black.png';
import drinkCoffeeYellowDrink from '@/shared/assets/merch/cups/drink-coffee-yellow/drink-coffee-yellow-drink.png';
import drinkCoffeeYellowRs from '@/shared/assets/merch/cups/drink-coffee-yellow/drink-coffee-yellow-rs.png';
import rollingScopesAwesomeFeedbackCup from '@/shared/assets/merch/cups/rolling-scopes-awesome-feedback/rolling-scopes-awesome-feedback.png';
import rollingScopesMentorCup from '@/shared/assets/merch/cups/rolling-scopes-mentor/rolling-scopes-mentor.png';
import rsCup from '@/shared/assets/merch/cups/rs-cup/rs-cup.png';
import rsJsMentorCup from '@/shared/assets/merch/cups/rs-javascript-mentor/rs-javascript-mentor.jpg';
import hoodieRs from '@/shared/assets/merch/hoodie/hoodie-rs/hoodie-rs.png';
import hoodieRsConfTashkent22 from '@/shared/assets/merch/hoodie/hoodie-rs-conf-tashkent-22/hoodie-rs-conf-tashkent-22.png';
import hoodieRsMentor from '@/shared/assets/merch/hoodie/hoodie-rs-mentor/hoodie-rs-mentor.jpg';
import ItNotBugShirt from '@/shared/assets/merch/t-shirts/it-s-not-a-bug/it-s-not-a-bug.png';
import jsDevDay from '@/shared/assets/merch/t-shirts/js-dev-day/js-dev-day.png';
import rollingScopesAwesomeFeedbackShirt from '@/shared/assets/merch/t-shirts/rolling-scopes-awesome-feedback/rolling-scopes-awesome-feedback.png';
import rollingScopesMentorShirtV1 from '@/shared/assets/merch/t-shirts/rolling-scopes-mentor/rolling-scopes-mentor-v1.png';
import rollingScopesMentorShirtV2 from '@/shared/assets/merch/t-shirts/rolling-scopes-mentor/rolling-scopes-mentor-v2.png';
import rollingScopesMentor2019ShirtV1 from '@/shared/assets/merch/t-shirts/rolling-scopes-mentor-2019/rolling-scopes-mentor-2019-v1.png';
import rollingScopesMentor2019ShirtV2 from '@/shared/assets/merch/t-shirts/rolling-scopes-mentor-2019/rolling-scopes-mentor-2019-v2.png';
import rollingScopesMentor2019ShirtV3 from '@/shared/assets/merch/t-shirts/rolling-scopes-mentor-2019/rolling-scopes-mentor-2019-v3.png';
import rollingScopesSchoolShirt from '@/shared/assets/merch/t-shirts/rolling-scopes-school/rolling-scopes-school.png';
import rollingScopesSchoolDoneShirt from '@/shared/assets/merch/t-shirts/rolling-scopes-school-done/rolling-scopes-school-done.png';
import rollingScopesSpeakerShirtV1 from '@/shared/assets/merch/t-shirts/rolling-scopes-speaker/rolling-scopes-speaker-v1.png';
import rollingScopesSpeakerShirtV2 from '@/shared/assets/merch/t-shirts/rolling-scopes-speaker/rolling-scopes-speaker-v2.png';
import rsAndroidDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-android-developer/rs-android-developer.jpg';
import rsAndroidMentorShirt from '@/shared/assets/merch/t-shirts/rs-android-mentor/rs-android-mentor.jpg';
import rsAngularDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-angular-developer/rs-angular-developer.jpg';
import rsAngularMentorShirt from '@/shared/assets/merch/t-shirts/rs-angular-mentor/rs-angular-mentor.jpg';
import rsConfMadeWithLoveShirt from '@/shared/assets/merch/t-shirts/rs-conf-made-with-love/rs-conf-made-with-love.png';
import rsDataScientistShirt from '@/shared/assets/merch/t-shirts/rs-data-scientist/rs-data-scientist.png';
import rsIosDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-ios-developer/rs-ios-developer.jpg';
import rsIosMentorShirt from '@/shared/assets/merch/t-shirts/rs-ios-mentor/rs-ios-mentor.jpg';
import rsJsDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-js-developer/rs-js-developer.jpg';
import rsJsMentorShirt from '@/shared/assets/merch/t-shirts/rs-js-mentor/rs-js-mentor.jpg';
import rsNodejsAwsDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-nodejs-asw-developer/rs-nodejs-asw-developer.jpg';
import rsNodejsAwsMentorShirt from '@/shared/assets/merch/t-shirts/rs-nodejs-aws-mentor/rs-nodejs-aws-mentor.jpg';
import rsNodejsDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-nodejs-developer/rs-nodejs-developer.jpg';
import rsNodejsMentorShirt from '@/shared/assets/merch/t-shirts/rs-nodejs-mentor/rs-nodejs-mentor.jpg';
import rsReactDeveloperShirt from '@/shared/assets/merch/t-shirts/rs-react-developer/rs-react-developer.jpg';
import rsReactMentorShirt from '@/shared/assets/merch/t-shirts/rs-react-mentor/rs-react-mentor.jpg';
import rsSchoolMentorShirt from '@/shared/assets/merch/t-shirts/rs-school-mentor/rs-school-mentor.jpg';
import teachItForwardShirt from '@/shared/assets/merch/t-shirts/teach-it-forward/teach-it-forward.png';
import theRollingScopesByShirt from '@/shared/assets/merch/t-shirts/the-rolling-scopes-by/the-rolling-scopes-by.png';
import theRollingScopesCrewShirt from '@/shared/assets/merch/t-shirts/the-rolling-scopes-crew/the-rolling-scopes-crew.jpg';

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
    title: 'Cup rolling-scopes Awesome Feedback',
    category: 'cups',
    imageUrl: [rollingScopesAwesomeFeedbackCup],
    downloadUrl:
      '@/shared/assets/merch/cups/rolling-scopes-awesome-feedback/rolling-scopes-awesome-feedback.zip',
  },
  {
    id: 'c006',
    title: 'The rolling-scopes Mentor',
    category: 'cups',
    imageUrl: [rollingScopesMentorCup],
    downloadUrl: '@/shared/assets/merch/cups/rolling-scopes-mentor/rolling-scopes-mentor.zip',
  },
  {
    id: 't001',
    title: 'The Rolling Scopes(BY)',
    category: 't-shirt',
    imageUrl: [theRollingScopesByShirt],
    downloadUrl: '@/shared/assets/merch/cups/rolling-scopes-mentor/rolling-scopes-mentor.zip',
  },
  {
    id: 't002',
    title: 'The Rolling Scopes Crew',
    category: 't-shirt',
    imageUrl: [theRollingScopesCrewShirt],
    downloadUrl:
      '@/shared/assets/merch/t-shirts/the-rolling-scopes-crew/the-rolling-scopes-crew.zip',
  },
  {
    id: 't003',
    title: 'RS Data Scientist',
    category: 't-shirt',
    imageUrl: [rsDataScientistShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-data-scientist/rs-data-scientist.zip',
  },
  {
    id: 't004',
    title: 'RS Android Developer',
    category: 't-shirt',
    imageUrl: [rsAndroidDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-android-developer/rs-android-developer.zip',
  },
  {
    id: 't005',
    title: 'RS Android Developer',
    category: 't-shirt',
    imageUrl: [rsAndroidDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-android-developer/rs-android-developer.zip',
  },
  {
    id: 't006',
    title: 'RS Angular Developer',
    category: 't-shirt',
    imageUrl: [rsAngularDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-angular-developer/rs-angular-developer.zip',
  },
  {
    id: 't007',
    title: 'RS iOs Developer',
    category: 't-shirt',
    imageUrl: [rsIosDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-ios-developer/rs-ios-developer.zip',
  },
  {
    id: 't008',
    title: 'RS JS Developer',
    category: 't-shirt',
    imageUrl: [rsJsDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-js-developer/rs-js-developer.zip',
  },
  {
    id: 't009',
    title: 'RS NodeJs Developer',
    category: 't-shirt',
    imageUrl: [rsNodejsDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-nodejs-developer/rs-nodejs-developer.zip',
  },
  {
    id: 't010',
    title: 'RS NodeJs AWS Developer',
    category: 't-shirt',
    imageUrl: [rsNodejsAwsDeveloperShirt],
    downloadUrl:
      '@/shared/assets/merch/t-shirts/rs-nodejs-asw-developer/rs-nodejs-asw-developer.zip',
  },
  {
    id: 't011',
    title: 'RS React Developer',
    category: 't-shirt',
    imageUrl: [rsReactDeveloperShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-react-developer/rs-react-developer.zip',
  },
  {
    id: 't012',
    title: 'It`s not a bug',
    category: 't-shirt',
    imageUrl: [ItNotBugShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/it-s-not-a-bug/it-s-not-a-bug.zip',
  },
  {
    id: 't013',
    title: 'Js Dev Day',
    category: 't-shirt',
    imageUrl: [jsDevDay],
    downloadUrl: '@/shared/assets/merch/t-shirts/js-dev-day/js-dev-day.zip',
  },
  {
    id: 't014',
    title: 'RS Android Mentor',
    category: 't-shirt',
    imageUrl: [rsAndroidMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-android-mentor/rs-android-mentor.zip',
  },
  {
    id: 't015',
    title: 'RS Angular Mentor',
    category: 't-shirt',
    imageUrl: [rsAngularMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-angular-mentor/rs-angular-mentor.zip',
  },
  {
    id: 't016',
    title: 'RS iOS Mentor',
    category: 't-shirt',
    imageUrl: [rsIosMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-ios-mentor/rs-ios-mentor.zip',
  },
  {
    id: 't017',
    title: 'RS JS Mentor',
    category: 't-shirt',
    imageUrl: [rsJsMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-js-mentor/rs-js-mentor.zip',
  },
  {
    id: 't018',
    title: 'RS Nodejs Mentor',
    category: 't-shirt',
    imageUrl: [rsNodejsMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-nodejs-mentor/rs-nodejs-mentor.zip',
  },
  {
    id: 't018',
    title: 'RS Nodejs AWS Mentor',
    category: 't-shirt',
    imageUrl: [rsNodejsAwsMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-nodejs-aws-mentor/rs-nodejs-aws-mentor.zip',
  },
  {
    id: 't019',
    title: 'RS React Mentor',
    category: 't-shirt',
    imageUrl: [rsReactMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-react-mentor/rs-react-mentor.zip',
  },
  {
    id: 't020',
    title: 'Rolling Scopes Mentor',
    category: 't-shirt',
    imageUrl: [rollingScopesMentorShirtV1, rollingScopesMentorShirtV2],
    downloadUrl: '@/shared/assets/merch/t-shirts/rolling-scopes-mentor/rolling-scopes-mentor.zip',
  },
  {
    id: 't021',
    title: 'Rolling Scopes Mentor(2019)',
    category: 't-shirt',
    imageUrl: [
      rollingScopesMentor2019ShirtV1,
      rollingScopesMentor2019ShirtV2,
      rollingScopesMentor2019ShirtV3,
    ],
    downloadUrl:
      '@/shared/assets/merch/t-shirts/rolling-scopes-mentor-2019/rolling-scopes-mentor-2019.zip',
  },
  {
    id: 't022',
    title: 'RS School Mentor',
    category: 't-shirt',
    imageUrl: [rsSchoolMentorShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-school-mentor/rs-school-mentor.zip',
  },
  {
    id: 't023',
    title: 'Rolling Scopes Awesome Feedback',
    category: 't-shirt',
    imageUrl: [rollingScopesAwesomeFeedbackShirt],
    downloadUrl:
      '@/shared/assets/merch/t-shirts/rolling-scopes-awesome-feedback/rolling-scopes-awesome-feedback.zip',
  },
  {
    id: 't024',
    title: 'Rolling Scopes School',
    category: 't-shirt',
    imageUrl: [rollingScopesSchoolShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rolling-scopes-school/rolling-scopes-school.zip',
  },
  {
    id: 't025',
    title: 'Rolling Scopes School Done',
    category: 't-shirt',
    imageUrl: [rollingScopesSchoolDoneShirt],
    downloadUrl:
      '@/shared/assets/merch/t-shirts/rolling-scopes-school-done/rolling-scopes-school-done.zip',
  },
  {
    id: 't026',
    title: 'Rolling Scopes Speaker',
    category: 't-shirt',
    imageUrl: [rollingScopesSpeakerShirtV1, rollingScopesSpeakerShirtV2],
    downloadUrl: '@/shared/assets/merch/t-shirts/rolling-scopes-speaker/rolling-scopes-speaker.zip',
  },
  {
    id: 't027',
    title: 'RS Conf Made With Love',
    category: 't-shirt',
    imageUrl: [rsConfMadeWithLoveShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/rs-conf-made-with-love/rs-conf-made-with-love.zip',
  },
  {
    id: 't028',
    title: 'Teach it forward',
    category: 't-shirt',
    imageUrl: [teachItForwardShirt],
    downloadUrl: '@/shared/assets/merch/t-shirts/teach-it-forward/teach-it-forward.zip',
  },
];
