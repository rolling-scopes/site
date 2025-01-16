import Image from 'next/image';

import arrow from '@/shared/assets/svg/dropdown-arrow.svg';

export const DropdownArrow = () => {
  return <Image src={arrow} alt="dropdown-arrow" aria-label="dropdown-arrow" />;
};
