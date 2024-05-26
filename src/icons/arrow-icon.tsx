import arrow from '@/assets/svg/arrow.svg';
import Image from '@/features/image';

export const ArrowIcon = ({
  size = '24px',
  invertColor = false,
}: {
  size?: string;
  invertColor?: boolean;
}) => {
  const filter: string = invertColor ? 'invert(100%)' : 'opacity(100%)';
  return <Image src={arrow} alt="" height={size} width={size} style={{ filter }} />;
};
