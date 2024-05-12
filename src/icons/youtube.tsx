import youtube from '@/assets/svg/youtube.svg';
import Image from '@/features/image';

export const YouTubeIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={youtube} alt="youtube icon" />
    </figure>
  );
};
