import discordIcon from '@/shared/assets/svg/discord-icon.svg';
import { Image } from '@/shared/ui/image';

export const DiscordIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={discordIcon} alt="discord icon" />
    </figure>
  );
};
