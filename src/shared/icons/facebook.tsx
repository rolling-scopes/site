import facebook from '@/shared/assets/svg/facebook.svg';
import { Image } from '@/shared/ui/image';

export const FacebookIcon = () => {
  return (
    <figure className="icon-surface">
      <Image img={facebook} alt="facebook icon" />
    </figure>
  );
};
