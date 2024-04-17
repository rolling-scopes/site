import type { Trainer } from './trainers.types';
import preSchoolImg2 from '@/assets/mentors/a-musikhina.webp';
import preSchoolImg1 from '@/assets/mentors/v-kavaliou.webp';

export const preSchool: Trainer[] = [
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
