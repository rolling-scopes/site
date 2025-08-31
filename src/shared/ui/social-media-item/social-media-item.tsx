import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { LinkCustom } from '../link-custom';

import styles from './social-media-item.module.scss';

export const cx = classNames.bind(styles);

export type SocialMediaProps = {
  title: string;
  href: string;
  icon: ReactNode;
  inline?: boolean;
};

export const SocialMediaItem = ({ title, href, icon, inline }: SocialMediaProps) => (
  <LinkCustom
    className={cx('social-media', { inline })}
    href={href}
    variant="withCustomClassName"
    external
    highContrast
    data-testid="social-media"
  >
    <span className={cx('media-icon')}>{icon}</span>
    <span className={cx('media-title')} data-testid="media-title">
      {title}
    </span>
  </LinkCustom>
);
