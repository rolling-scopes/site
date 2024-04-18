import { PrincipleCardProps } from '@/app/components';
import { OpenSourcePhilosophyIcon, OpenToEveryoneIcon, TeachItForwardIcon } from '@/icons';

export const cards: PrincipleCardProps[] = [
  {
    title: 'Open to everyone',
    description:
      'Free courses, no obligations, and no contracts. No age limit. Only students’ time and dedication are required. Students can repeatedly attend courses.',
    icon: <OpenToEveryoneIcon />,
  },
  {
    title: 'Open source philosophy',
    description:
      'Our Learning Management System platform and educational materials are publicly available on GitHub and YouTube.',
    icon: <OpenSourcePhilosophyIcon />,
  },
  {
    title: '"Teach it forward"',
    description:
      'Students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students.',
    icon: <TeachItForwardIcon />,
  },
];
