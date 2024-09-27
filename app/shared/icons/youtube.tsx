import youtube from '@/shared/assets/svg/youtube.svg';
import { Image } from '@/shared/ui/image';

export const YouTubeIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={youtube} alt="youtube icon" />
    </figure>
  );
};
