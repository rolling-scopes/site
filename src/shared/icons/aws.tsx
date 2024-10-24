import Image from 'next/image';
import aws from '@/shared/assets/svg/aws.svg';

export const AwsLogo = () => {
  return <Image src={aws} alt="AWS icon" />;
};
