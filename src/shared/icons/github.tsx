import Image from 'next/image';

import github from '@/shared/assets/svg/github.svg';

export const GithubLogo = () => {
  return <Image src={github} alt=" github icon" />;
};
