import Image from 'next/image';

import aws from '@/shared/assets/icons/aws-gray.svg';

export const AwsLogo = () => {
  return (
    <Image src={aws} alt="AWS icon" />
  );
};
