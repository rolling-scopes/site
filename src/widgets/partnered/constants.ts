import awsIcon from '@/shared/assets/svg/aws-gray.svg';
import githubIcon from '@/shared/assets/svg/github.svg';
import jetbrainsIcon from '@/shared/assets/svg/jetbrains.svg';

export const partners = [
  {
    id: 'jetbrains',
    href: 'https://www.jetbrains.com',
    icon: jetbrainsIcon,
  },
  {
    id: 'aws',
    href: 'https://aws.amazon.com/',
    icon: awsIcon,
  },
  {
    id: 'github',
    href: 'https://github.com/',
    icon: githubIcon,
  },
] as const;
