import classNames from 'classnames/bind';

import { SocialMediaItem, SocialMediaProps } from '@/shared/ui/social-media-item';

import styles from './onboard-links.module.scss';

const cx = classNames.bind(styles);

export type OnboardLinksProps = {
  text: string;
  links: SocialMediaProps[];
};

export const OnboardLinks = ({ text, links }: OnboardLinksProps) => {
  return (
    <div className={cx('onboard-links-wrapper')}>
      {text}
      <nav className={cx('onboard-links')} aria-label="Social media links">
        {links.map((link) => (
          <SocialMediaItem key={link.href} title={link.title} href={link.href} icon={link.icon} />
        ))}
      </nav>
    </div>
  );
};
