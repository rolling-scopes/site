import Image from 'next/image';

import jetbrains from '@/shared/assets/svg/jetbrains.svg';

export const JetBrainsLogo = () => {
  return (
    <Image
      src={jetbrains}
      style={{ filter: 'grayscale(100%) contrast(15%)' }}
      width={200}
      alt="jetbrains icon"
      data-testid="jetbrains icon"
    />
  );
};
