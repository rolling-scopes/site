import Image from 'next/image';

import textLinkIcon from '@/shared/assets/svg/text-link.svg';

export const TextLinkIcon = () => {
  return (
    <Image
      src={textLinkIcon}
      width={20}
      height={20}
      alt="external link icon"
      data-testid="text-link-icon"
    />
  );
};
