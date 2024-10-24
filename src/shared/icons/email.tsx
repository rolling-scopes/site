import Image from 'next/image';
import email from '@/shared/assets/svg/email.svg';

export const EmailIcon = () => {
  return <Image src={email} alt="email icon" />;
};
