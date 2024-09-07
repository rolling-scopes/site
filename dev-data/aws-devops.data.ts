import type { Trainer } from '@/entities/trainer';
import awsImg3 from '@/shared/assets/mentors/a-khatseyeva.webp';
import awsImg2 from '@/shared/assets/mentors/ac-danilov.webp';
import awsImg1 from '@/shared/assets/mentors/ac-kustikov.webp';

export const awsDevops: Trainer[] = [
  {
    name: 'Anton Kustikov',
    role: 'EPAM, Systems Engineer',
    bio: 'Made it to IT after EPAM DevOps Lab. Having plenty of experience in networking, earned working as an ISP engineer. Interrested in microcontrollers, k8s and data analyzing. Since moved to DevOps, started the endless path of learning AWS. DevOps is not just a job title, but a life style, where you are continiously learning new technologies and trying all the new tools in order to find the one that brilliantly fits your needs(thats sound impossible, i know) Once he got his dream job, and now he wants to help like - minders folks to get theirs.',
    photo: awsImg1,
  },
  {
    name: 'Ivan Danilov',
    role: 'EPAM, Lead Systems Engineer',
    bio: 'Ivan is a seasoned engineer with many years of work in different roles including Software and Systems Engineering.For the last several years he has been working on solutions in cloud leveraging managed services, serverless, etc.AWS is now his main tool and mate in his professional journey.',
    photo: awsImg2,
  },
  {
    name: 'Alisa Khatseyeva',
    role: 'EPAM, Senior Systems Engineer',
    bio: 'Alisa is a skilled DevOps engineer with a deep expertise in CI/CD and AWS cloud services. With a background in software development and system administration, she quickly transitioned into the world of DevOps. Alisa is passionate about streamlining processes and improving efficiency through continuous integration and continuous delivery pipelines. Her work primarily focuses on enhancing AWS cloud to design and implement scalable, reliable infrastructure solutions. Now, she’s eager to share her knowledge and help others embark on their cloud career path.',
    photo: awsImg3,
  },
];
