import Image from '@/features/image';
import arrow from '@/shared/assets/svg/arrow.svg';

export const ArrowIcon = ({ size = '24px' }: { size?: string }) => {
  return <Image src={arrow} alt="" height={size} width={size} />;
};
