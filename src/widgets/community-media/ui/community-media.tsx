import classNames from 'classnames/bind';
import image from '@/shared/assets/welcome.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SocialMediaItem } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { communityGroups } from 'data';

import styles from './community-media.module.scss';

const cx = classNames.bind(styles);

export const CommunityMedia = () => (
  <div id="community" className={cx('community', 'container')}>
    <div className={cx('community', 'content', 'column-2')}>
      <div className={cx('info')}>
        <WidgetTitle size="large" mods="lines">
          Join RS Community
        </WidgetTitle>
        <Paragraph fontSize="large">
          If you want to learn coding or be a RS School mentor, speaking at developers meetups and
          conferences or taking part in RS clubs welcome to the Rolling Scopes community! Join us in
          social networks to be in touch!
        </Paragraph>
        <div className={cx('social-media-container')}>
          {communityGroups.map(({ title, href, icon }) => (
            <SocialMediaItem key={title} title={title} href={href} icon={icon} />
          ))}
        </div>
      </div>
      <Image className={cx('right', 'picture')} src={image} alt="community-welcome" />
    </div>
  </div>
);
