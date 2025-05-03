import Image from 'next/image';

import openCollective from '@/shared/assets/svg/opencollective-icon.svg';

export const OpenCollectiveIcon = () => {
  return (
    <Image
      width={24}
      height={24}
      src={openCollective}
      alt="open collective icon"
      data-testid="opencollective-icon"
    />
  );
};
