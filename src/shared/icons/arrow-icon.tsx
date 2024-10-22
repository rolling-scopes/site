import Image from 'next/image';
import arrow from '@/shared/assets/svg/arrow.svg';

export const ArrowIcon = ({ size = 24 }: { size?: number }) => {
  return (
    <Image
      src={arrow}
      alt="arrow icon"
      height={size}
      width={size}
      data-testid="arrow-icon"
    />
  );
};
