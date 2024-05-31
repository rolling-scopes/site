import arrow from '@/assets/svg/arrow.svg';
import Image from '@/features/image';

export const ArrowIcon = ({ size = '24px' }: { size?: string }) => {
  return <Image src={arrow} alt="" height={size} width={size} />;
};
