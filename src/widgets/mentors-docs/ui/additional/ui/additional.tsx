import classNames from 'classnames/bind';
import { DiscordIcon, TelegramIcon } from '@/shared/icons';
import { Paragraph } from '@/shared/ui/paragraph';
import { SocialMediaItem } from '@/shared/ui/social-media-item';

import styles from './additional.module.scss';

const cx = classNames.bind(styles);

type AdditionalProps = {
  text: string;
  linkTelegram: string;
  linkDiscord: string;
};

export const Additional = ({ text, linkDiscord, linkTelegram }: AdditionalProps) => {
  return (
    <Paragraph className={cx('additional')}>
      {text}
      <SocialMediaItem title="Telegram" href={linkTelegram} icon={TelegramIcon()} />
      <SocialMediaItem title="Discord" href={linkDiscord} icon={DiscordIcon()} />
    </Paragraph>
  );
};
