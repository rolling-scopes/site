import Image from '@/features/image';
import youtube from '@/shared/assets/svg/youtube.svg';

export const YouTubeIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={youtube} alt="youtube icon" />
    </figure>
  );
};
