import arrow from '@/shared/assets/svg/arrow.svg';
import { Image } from '@/shared/ui/image';

export const ArrowIcon = ({ size = '24px' }: { size?: string }) => {
  return <Image src={arrow} alt="" height={size} width={size} />;
};
