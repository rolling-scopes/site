import textLinkIcon from '@/shared/assets/svg/text-link.svg';
import { Image } from '@/shared/ui/image';

export const TextLinkIcon = () => {
  return (
    <Image
      img={textLinkIcon}
      width={20}
      height={20}
      alt="external link icon"
      data-testid="text-link-icon"
    />
  );
};
