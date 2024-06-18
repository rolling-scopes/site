import banner from '@/shared/assets/svg/RsBanner.svg';
import Image from '@/shared/ui/image';

export const RsBanner = () => {
  return <Image data-testid="rs-banner" src={banner} alt="RsBanner Icon" />;
};
