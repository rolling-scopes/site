import Image from 'next/image';
import openSourcePhilosophyIcon from '@/shared/assets/svg/openSourcePhilosophyIcon.svg';
import openToEveryoneIcon from '@/shared/assets/svg/openToEveryoneIcon.svg';
import teachItForwardIcon from '@/shared/assets/svg/teachItForwardIcon.svg';
import { PrincipleCard } from '@/widgets/principles';

export const principleCards: PrincipleCard[] = [
  {
    title: 'Open to everyone',
    description:
      'Free courses, no obligations, and no contracts. No age limit. Only students’ time and dedication are required. Students can repeatedly attend courses.',
    icon: <Image src={openToEveryoneIcon} alt="" aria-hidden="true" />,
  },
  {
    title: 'Open source philosophy',
    description:
      'Our Learning Management System platform and educational materials are publicly available on GitHub and YouTube.',
    icon: <Image src={openSourcePhilosophyIcon} alt="" aria-hidden="true" />,
  },
  {
    title: '"Teach it forward"',
    description:
      'Students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students.',
    icon: <Image src={teachItForwardIcon} alt="" aria-hidden="true" />,
  },
];
