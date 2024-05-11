import linkArrow from '@/assets/svg/link-arrow.svg';
import Image from '@/features/image';

export const LinkArrowIcon = ({ side }: { side: number }) => {
  return <Image src={linkArrow} alt="" height={`${side}px`} width={`${side}px`} />;
};
