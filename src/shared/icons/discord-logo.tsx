import Image from 'next/image';

import discordLogo from '@/shared/assets/svg/discord-logo.svg';

export const DiscordLogo = () => {
  return <Image src={discordLogo} alt="discord logo" />;
};
