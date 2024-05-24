import type { Trainer } from './trainers.types';
import preSchoolImg2 from '@/assets/mentors/a-musikhina.webp';
import preSchoolImg1 from '@/assets/mentors/v-kavaliou.webp';

export const preSchoolRu: Trainer[] = [
  {
    name: 'Виктор Ковалёв',
    role: 'EPAM, Senior Software Engineer',
    bio: 'Это выпускник RS School, который в течение последних нескольких лет работает в EPAM в качестве Senior Software Engineer. Он принимал участие в разработке веб-приложений (JS, React) и мобильных приложений (React Native, Swift). Как выпускник RS School, который никогда не программировал до поступления на курсы, он понимает возможные трудности в процессе обучения и всегда готов помочь студентам. Он начал заниматься менторством, как только он понял, что накопил достаточно знаний, чтобы поделиться ими с другими.',
    photo: preSchoolImg1,
  },

  {
    name: 'Анна Мусихина',
    role: '',
    bio: 'Анна имеет самые глубокие страсти в жизни – создавать крутые вещи и помогать людям. Фронтенд-разработка – это то место, где эти страсти соединяются, поэтому она полностью в этом заинтересована. Она здесь, чтобы сделать путь каждого в мир IT еще проще и удобнее, поэтому присоединяйтесь к ее путешествию!',
    photo: preSchoolImg2,
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
