import Image from 'next/image';

import jetbrains from '@/shared/assets/svg/jetbrains.svg';
import { LinkCustom } from '@/shared/ui/link-custom';

export const JetBrainsLogo = () => {
  return (
    <LinkCustom
      href="https://www.jetbrains.com"
      external
      icon={null}
    >
      <Image
        src={jetbrains}
        style={{ filter: 'grayscale(100%) contrast(15%)' }}
        width={200}
        alt="jetbrains icon"
      />
    </LinkCustom>
  );
};
