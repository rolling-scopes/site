import Image from 'next/image';

import facebook from '@/shared/assets/svg/facebook.svg';

export const FacebookIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={facebook} alt="facebook icon" />
    </figure>
  );
};
