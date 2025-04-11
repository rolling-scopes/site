import Image from 'next/image';

import linkedIn from '@/shared/assets/svg/linkedIn.svg';

export const LinkedInIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={linkedIn} alt="linkedIn icon" />
    </figure>
  );
};
