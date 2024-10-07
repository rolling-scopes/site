import arrow from '@/shared/assets/svg/arrow.svg';
import { Image } from '@/shared/ui/image';

export const ArrowIcon = ({ size = '24px' }: { size?: string }) => {
  return (
    <Image
      img={arrow}
      alt="arrow icon"
      height={size}
      width={size}
      data-testid="arrow-icon"
    />
  );
};
