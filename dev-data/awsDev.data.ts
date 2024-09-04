import type { Trainer } from '@/entities/trainer/types';
import awsImg3 from '@/shared/assets/mentors/ac-akbarov.webp';
import awsImg6 from '@/shared/assets/mentors/ac-danilov.webp';
import awsImg4 from '@/shared/assets/mentors/ac-konyakhin.webp';
import awsImg5 from '@/shared/assets/mentors/ac-kustikov.webp';
import awsImg2 from '@/shared/assets/mentors/v-antonau.webp';
import awsImg1 from '@/shared/assets/mentors/v-kavaliou.webp';

export const awsDev: Trainer[] = [
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
  {
    name: 'Dazik Akbarov',
    role: 'EPAM, Lead Software Engineer',
    bio: 'Dazik has been working on several roles and various stacks for more than 5 years: started coding as a hobby and used to work with Visual Basic, C# and PHP and joined to the wonderful world of javascript after graduating RS School in 2021. Charmed by the TypeScript and Angular, he pivoted his career to join EPAM and work as a frontend engineer. Nowadays he is mostly focused on cloud and solutions architecture and drives AWS User Group Tashkent community.',
    photo: awsImg3,
  },
  {
    name: 'Pavel Konyakhin',
    role: '',
    bio: 'As an alumnus of TumoLabs research and development and a graduate of RS School, has actively engaged in various online streams, ideathons and hackathons.He had a chance to play a significant role in projects such as AgriTech and Capital SocialLife, where he developed ideas, web applications and led the team.Starting his programming journey with RS School with almost no prior experience, he understand the challenges that students might face and is always eager to assist them.He began mentoring once he felt he had gained enough knowledge to help others succeed.',
    photo: awsImg4,
  },
  {
    name: 'Anton Kustikov',
    role: 'EPAM, Systems Engineer',
    bio: 'Made it to IT after EPAM DevOps Lab. Having plenty of experience in networking, earned working as an ISP engineer. Interrested in microcontrollers, k8s and data analyzing. Since moved to DevOps, started the endless path of learning AWS. DevOps is not just a job title, but a life style, where you are continiously learning new technologies and trying all the new tools in order to find the one that brilliantly fits your needs(thats sound impossible, i know) Once he got his dream job, and now he wants to help like - minders folks to get theirs.',
    photo: awsImg5,
  },
  {
    name: 'Ivan Danilov',
    role: 'EPAM, Lead Systems Engineer',
    bio: 'Ivan is a seasoned engineer with many years of work in different roles including Software and Systems Engineering.For the last several years he has been working on solutions in cloud leveraging managed services, serverless, etc.AWS is now his main tool and mate in his professional journey.',
    photo: awsImg6,
  },
];
