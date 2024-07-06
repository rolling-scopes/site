import type { Trainer } from './trainers.types';
import annaMusikhinaImg from '@/shared/assets/mentors/a-musikhina.webp';
import vadimAntonauImg from '@/shared/assets/mentors/v-antonau.webp';
import vitaliiRogozinImg from '@/shared/assets/mentors/Vitalii-Rogozin.png';

export const javaScriptRu: Trainer[] = [
  {
    name: 'Вадим Антонов',
    role: 'Full Stack Engineer @dev Team Inc.',
    bio: 'Программист с более чем 10-летним опытом работы, изначально в PHP, а теперь full-stack инженер, владеющий TypeScript, Angular, React, Node.js и AWS. После десяти лет работы с PHP он переключил свое внимание на современные full-stack технологии, успешно прошел соответствующие курсы и теперь обучает других.',
    photo: vadimAntonauImg,
  },

  {
    name: 'Анна Мусихина',
    role: '',
    bio: 'Самые глубокие страсти в жизни Анны – создавать крутые вещи и помогать людям. Фронтенд-разработка – это то место, где эти страсти соединяются, поэтому она полностью увлечена этим процессом. Она здесь, чтобы сделать путь каждого в мир IT немного мягче, поэтому присоединяйтесь к ее путешествию!',
    photo: annaMusikhinaImg,
  },

  {
    name: 'Виталий Рогозин',
    role: '',
    bio: 'Пришел в конце 2021 года в RSS просто «посмотреть», что это такое, и как-то незаметно для себя прошел сначала подготовительный этап, а потом и основной курс. Учился параллельно работе разработчиком web-приложений (Vue). Во время обучения понял одну интересную вещь: когда объясняешь другим какой-то материал, то и сам начинаешь в нем лучше разбираться. И сейчас продолжаю, в меру своих возможностей, помогать студентам начинать этот сложный путь.',
    photo: vitaliiRogozinImg,
  },
];
