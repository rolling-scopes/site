import nodejsImg1 from '@/shared/assets/mentors/m-shylau.webp';
import { Trainer } from '@/widgets/trainers/trainers.types';

export const MOCKED_IMAGE_PATH = 'mocked-image-path.webp';
const MOCKED_TRAINER = {
  name: 'Maksim Shylau',
  role: 'Senior Software Engineer at Epam',
  bio: "Maksim Shylau is a professional with around 6 years of programming experience. Initially a hobby, programming evolved into Maxim's current profession as a full-stack developer (proficient in JavaScript, TypeScript, React, Node.js, and AWS) at EPAM Systems, where he holds the position of Senior Software Engineer. Maksim actively contributes to RS School in his leisure time by leading a Node.js course, delivering lectures, creating educational tasks, and participating in various events. He is committed to continuous learning, constantly exploring new technologies, and extends his passion to helping students master web development.",
  photo: nodejsImg1,
};
export const MOCKED_ONE_TRAINER: Trainer[] = [MOCKED_TRAINER];
export const MOCKED_MULTIPLE_TRAINERS: Trainer[] = Array.from({ length: 2 }, () => MOCKED_TRAINER);
export const MOCKED_SEVERAL_TRAINERS: Trainer[] = Array.from({ length: 8 }, () => MOCKED_TRAINER);
