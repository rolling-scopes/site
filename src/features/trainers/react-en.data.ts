import type { Trainer } from './trainers.types';
import reactEnImg2 from '@/assets/mentors/a-parfianenkau.webp';
import reactEnImg4 from '@/assets/mentors/a-podlubnyj.webp';
import reactEnImg3 from '@/assets/mentors/d-yarmoshkin.webp';
import reactEnImg1 from '@/assets/mentors/i-krasiuk.webp';

export const reactEn: Trainer[] = [
  {
    name: 'Ihar Krasiuk',
    bio: 'More than 5 years of experience working with React and the ecosystem (Redux, Redux-Saga, NextJS, etc.). TypeScript fan.',
    role: 'JavaScript developer',
    photo: reactEnImg1,
  },
  {
    name: 'Artsiom Parfianenkau',
    role: 'Front-end/Full Stack developer',
    bio: '4 overall years of experience. Fell in love with SSR frameworks like Next.js and Remix.js. Re-renders hater and optimization fan. Previously was a mentor on JS/React courses. Currently focused on RSS React course development.',
    photo: reactEnImg2,
  },
  {
    name: 'Dzmitry Yarmoshkin',
    role: 'PHP / React front-end developer',
    bio: "While my journey took an unexpected turn, my passion for front-end work has never been stronger. Not a big fan of Redux, but that's the beauty of the tech world - we all have our preferences. Embracing the unpredictability of tech careers, I'm excited to see where my adventure takes me!",
    photo: reactEnImg3,
  },
  {
    name: 'Andrej Podlubnyj',
    role: 'Experienced Software Engineer',
    bio: 'Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Search Engine Optimization (SEO), Web/Mobile Development, and JavaScript . Strong engineering professional with a Computer Scientist.',
    photo: reactEnImg4,
  },
];
