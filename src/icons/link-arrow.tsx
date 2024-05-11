import linkArrow from '@/assets/svg/link-arrow.svg';
import Image from '@/features/image';

export const LinkArrowIcon = ({ sizes }: { sizes: string }) => {
  return <Image src={linkArrow} alt="" sizes={sizes} />;
};
