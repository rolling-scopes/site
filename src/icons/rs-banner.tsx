import banner from '@/assets/svg/RsBanner.svg';
import Image from '@/features/image';

export const RsBanner = () => {
  return <Image data-testid="rs-banner" src={banner} alt="RsBanner Icon" />;
};
