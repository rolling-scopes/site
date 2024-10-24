import Image from 'next/image';
import jetbrains from '@/shared/assets/svg/jetbrains.svg';

export const JetBrainsLogo = () => {
  return <Image src={jetbrains} alt="jetbrains icon" />;
};
