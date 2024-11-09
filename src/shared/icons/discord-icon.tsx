import Image from 'next/image';
import discordIcon from '@/shared/assets/svg/discord-icon.svg';

export const DiscordIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={discordIcon} alt="discord icon" />
    </figure>
  );
};
