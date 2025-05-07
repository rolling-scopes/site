import Image from 'next/image';

import jetbrains from '@/shared/assets/svg/jetbrains.svg';

export const JetBrainsLogo = () => {
  return (
    <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer">
      <Image src={jetbrains} width={200} alt="jetbrains icon" />
    </a>
  );
};
