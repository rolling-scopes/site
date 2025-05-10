import Image from 'next/image';

import github from '@/shared/assets/svg/github.svg';
import { LinkCustom } from '@/shared/ui/link-custom';

export const GithubLogo = () => {
  return (
    <LinkCustom
      href="https://github.com/"
      external
      icon={null}
    >
      <Image src={github} alt=" github icon" />
    </LinkCustom>
  );
};
