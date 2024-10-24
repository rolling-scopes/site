import Image from 'next/image';
import instagram from '@/shared/assets/svg/instagram.svg';

export const InstagramIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={instagram} alt="instagram icon" />
    </figure>
  );
};
