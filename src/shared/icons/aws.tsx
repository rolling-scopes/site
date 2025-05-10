import Image from 'next/image';

import aws from '@/shared/assets/icons/aws-gray.svg';
import { LinkCustom } from '@/shared/ui/link-custom';

export const AwsLogo = () => {
  return (
    <LinkCustom
      href="https://aws.amazon.com/"
      external
      icon={null}
    >
      <Image src={aws} alt="AWS icon" />
    </LinkCustom>
  );
};
