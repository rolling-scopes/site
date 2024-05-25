import arrow from '@/assets/svg/arrow.svg';
import Image from '@/features/image';

export const ArrowIcon = ({
  side,
  invertIconColor,
}: {
  side: string;
  invertIconColor: boolean;
}) => {
  const filter: string = invertIconColor ? 'invert(100%)' : 'opacity(100%)';
  return <Image src={arrow} alt="" height={side} width={side} style={{ filter }} />;
};
