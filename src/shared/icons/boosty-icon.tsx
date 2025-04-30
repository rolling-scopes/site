import Image from 'next/image';

import boostyIcon from '@/shared/assets/svg/boosty-icon.svg';

type BoostyIconProps = {
  width?: number;
  height?: number;
};

export const BoostyIcon = ({ width = 24, height = 24 }: BoostyIconProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={boostyIcon}
      alt="boosty icon"
      data-testid="boosty-icon"
    />
  );
};
