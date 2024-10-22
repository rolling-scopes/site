import Image from 'next/image';
import epam from '@/shared/assets/svg/epam.svg';

export const EpamLogo = () => {
  return <Image src={epam} alt="epam" />;
};
