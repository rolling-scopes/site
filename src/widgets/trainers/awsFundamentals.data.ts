import type { Trainer } from './trainers.types';
import awsImg2 from '@/shared/assets/mentors/v-antonau.webp';
import awsImg1 from '@/shared/assets/mentors/v-kavaliou.webp';

export const awsFundamentals: Trainer[] = [
  {
    name: 'Viktar Kavaliou',
    role: 'EPAM, Senior Software Engineer',
    bio: 'An RS School graduate who, over the past few years, has been working at EPAM as a Senior Software Engineer. He is involved in the development of web applications (JS, React) and mobile applications (React Native, Swift). As an RS School graduate who had never programmed before taking the courses, he understands the potential difficulties in the learning process and is always ready to help students. He took up mentoring as soon as he realized that he had accumulated enough knowledge to share with others.',
    photo: awsImg1,
  },
  {
    name: 'Vadzim Antonau',
    role: 'Full Stack Engineer @dev Team Inc.',
    bio: 'A software engineer with over 10 years of experience, initially in PHP and now as a full-stack engineer proficient in TypeScript, Angular, React, Node.js, and AWS. After a decade in PHP development, he shifted focus to modern full-stack technologies, successfully completing courses and now teaching others.',
    photo: awsImg2,
  },
];
