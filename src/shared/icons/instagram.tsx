import instagram from '@/shared/assets/svg/instagram.svg';
import { Image } from '@/shared/ui/image';

export const InstagramIcon = () => {
  return (
    <figure className="icon-surface">
      <Image img={instagram} alt="instagram icon" />
    </figure>
  );
};
