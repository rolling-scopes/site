import Image from 'next/image';

import boostyIcon from '@/shared/assets/svg/boosty-icon.svg';

export const BoostyIcon = () => {
  return (
    <Image
      width={24}
      height={24}
      src={boostyIcon}
      alt="boosty icon"
      data-testid="boosty-icon"
    />
  );
};
