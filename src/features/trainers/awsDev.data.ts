import type { Trainer } from './trainers.types';
import awsImg3 from '@/assets/mentors/a-vera.webp';
import awsImg1 from '@/assets/mentors/d-struneuski.webp';
import awsImg2 from '@/assets/mentors/e-garipov.webp';
import awsImg4 from '@/assets/mentors/s-castellanos.webp';

export const awsDev: Trainer[] = [
  {
    name: 'Dzmitry Struneuski',
    role: 'Systems Engineer ',
    bio: 'I am an experienced Systems Engineer skilled in managing server infrastructures, building network systems, and troubleshooting Linux and Windows operating systems. I have a passion for learning new tools and technologies, with a strong focus on prioritizing security and optimizing processes to ensure seamless workflows.',
    photo: awsImg1,
  },
  {
    name: 'Emil Garipov',
    role: 'DevOps Engineer',
    bio: 'I am a passionate professional with extensive experience in network engineering. I have a keen interest in cloud technologies, DevOps and Kubernetes (K8s) My commitment to the industry has been recognised by being named a Cisco Champion for 2020-2023. In 2021, I was also recognised as a top contributor to Cisco community events, reflecting my commitment to sharing knowledge and supporting the community. I am also a Subject Matter Expert in computer networking. As part of my efforts to foster a collaborative environment, I am the creator of a Russian language community dedicated to network automation.',
    photo: awsImg2,
  },
  {
    name: 'Alvaro Vera',
    role: 'DevOps Engineer',
    bio: 'I am a seasoned DevOps Engineer with over five years of experience across various technology domains. My expertise lies in cloud infrastructure, continuous integration, and a deep proficiency in Infrastructure as Code (IaC). I have a strong affinity for AWS as my preferred cloud provider and have earned multiple certifications in AWS services.',
    photo: awsImg3,
  },
  {
    name: 'Santiago Castellanos',
    role: 'DevOps Engineer',
    bio: 'Over five years of expertise in AWS solutions. Proven leader in DevOps, specializing in cloud infrastructure and CI/CD practices. Recognized for driving high-quality results and fostering teamwork. Industry-certified in AWS and Terraform. Led cloud practices for organizations in Latin America, delivering top-notch IT solutions.',
    photo: awsImg4,
  },
];
