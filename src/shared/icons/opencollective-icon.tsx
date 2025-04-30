import Image from 'next/image';

import openCollective from '@/shared/assets/svg/opencollective-icon.svg';

type OpenCollectiveIconProps = {
  width?: number;
  height?: number;
};

export const OpenCollectiveIcon = ({ width = 24, height = 24 }: OpenCollectiveIconProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={openCollective}
      alt="open collective icon"
      data-testid="opencollective-icon"
    />
  );
};
