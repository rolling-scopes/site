import type { Trainer } from './trainers.types';
import nodejsImg2 from '@/shared/assets/mentors/a-auchynikau.webp';
import nodejsImg1 from '@/shared/assets/mentors/m-shylau.webp';
import nodejsImg3 from '@/shared/assets/mentors/v-antonau.webp';

export const nodejs: Trainer[] = [
  {
    name: 'Maksim Shylau',
    role: 'Senior Software Engineer at Epam',
    bio: "Maksim Shylau is a professional with around 6 years of programming experience. Initially a hobby, programming evolved into Maxim's current profession as a full-stack developer (proficient in JavaScript, TypeScript, React, Node.js, and AWS) at EPAM Systems, where he holds the position of Senior Software Engineer. Maksim actively contributes to RS School in his leisure time by leading a Node.js course, delivering lectures, creating educational tasks, and participating in various events. He is committed to continuous learning, constantly exploring new technologies, and extends his passion to helping students master web development.",
    photo: nodejsImg1,
  },
  {
    name: 'Andrei Auchynnikau',
    role: 'Iomico, Technical Lead Embedded Software Engineer',
    bio: 'A firmware and software engineer with over 11 years of experience. Started as a system administrator, then re-qualified as an embedded developer. Finished RS School NodeJS courses in 2020. Now I design architectures for embedded systems, manage embedded development projects, develop firmware and software for microcontrollers, embedded systems and full-stack web applications. Participate in several open source projects using various technologies (C, C++, Node.js, React, TypeScript, etc.).',
    photo: nodejsImg2,
  },
  {
    name: 'Vadzim Antonau',
    role: 'Full Stack Engineer @dev Team Inc.',
    bio: 'A software engineer with over 10 years of experience, initially in PHP and now as a full-stack engineer proficient in TypeScript, Angular, React, Node.js, and AWS. After a decade in PHP development, he shifted focus to modern full-stack technologies, successfully completing courses and now teaching others.',
    photo: nodejsImg3,
  },
];
