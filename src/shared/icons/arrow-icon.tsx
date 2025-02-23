import Image from 'next/image';

import arrow from '@/shared/assets/svg/arrow.svg';

export const ArrowIcon = () => {
  return (
    <Image
      src={arrow}
      alt="arrow icon"
      data-testid="arrow-icon"
    />
  );
};
