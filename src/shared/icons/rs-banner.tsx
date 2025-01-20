import Image from 'next/image';

import banner from '@/shared/assets/svg/RsBanner.svg';

export const RsBanner = () => {
  return <Image data-testid="rs-banner" src={banner} alt="RsBanner Icon" />;
};
