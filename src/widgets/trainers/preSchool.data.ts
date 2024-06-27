import type { Trainer } from './trainers.types';
import preSchoolImg2 from '@/shared/assets/mentors/a-musikhina.webp';
import preSchoolImg1 from '@/shared/assets/mentors/v-kavaliou.webp';
import preSchoolImg3 from '@/shared/assets/mentors/Vitalii-Rogozin.png';

export const preSchoolRu: Trainer[] = [
  {
    name: 'Виктор Ковалёв',
    role: 'EPAM, Senior Software Engineer',
    bio: 'Это выпускник RS School, который в течение последних нескольких лет работает в EPAM в качестве Senior Software Engineer. Он принимал участие в разработке веб-приложений (JS, React) и мобильных приложений (React Native, Swift). Как выпускник RS School, который никогда не программировал до поступления на курсы, он понимает возможные трудности в процессе обучения и всегда готов помочь студентам. Он начал заниматься менторством, как только понял, что накопил достаточно знаний, чтобы поделиться ими с другими.',
    photo: preSchoolImg1,
  },

  {
    name: 'Анна Мусихина',
    role: '',
    bio: 'Самые глубокие страсти в жизни Анны – создавать крутые вещи и помогать людям. Фронтенд-разработка – это то место, где эти страсти соединяются, поэтому она полностью увлечена этим процессом. Она здесь, чтобы сделать путь каждого в мир IT немного мягче, поэтому присоединяйтесь к ее путешествию!',
    photo: preSchoolImg2,
  },

  {
    name: 'Виталий Рогозин',
    role: '',
    bio: 'Пришел в конце 2021 года в RSS просто «посмотреть», что это такое, и как-то незаметно для себя прошел сначала подготовительный этап, а потом и основной курс. Учился параллельно работе разработчиком web-приложений (Vue). Во время обучения понял одну интересную вещь: когда объясняешь другим какой-то материал, то и сам начинаешь в нем лучше разбираться. И сейчас продолжаю, в меру своих возможностей, помогать студентам начинать этот сложный путь.',
    photo: preSchoolImg3,
  },
];
export const preSchoolEn: Trainer[] = [
  {
    name: 'Viktar Kavaliou',
    role: 'EPAM, Senior Software Engineer',
    bio: 'An RS School graduate who, over the past few years, has been working at EPAM as a Senior Software Engineer. He is involved in the development of web applications (JS, React) and mobile applications (React Native, Swift). As an RS School graduate who had never programmed before taking the courses, he understands the potential difficulties in the learning process and is always ready to help students. He took up mentoring as soon as he realized that he had accumulated enough knowledge to share with others.',
    photo: preSchoolImg1,
  },
  {
    name: 'Anna Musikhina',
    role: '',
    bio: "Anna's biggest passions in life are creating cool stuff and helping people out. Frontend development is the sweet spot where these passions collide, which is why she's all in. She's here to make everyone's journey into the IT world a tad smoother, so count her in for that ride!",
    photo: preSchoolImg2,
  },
];
