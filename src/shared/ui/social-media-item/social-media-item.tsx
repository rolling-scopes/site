import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { LinkCustom } from '../link-custom';

import styles from './social-media-item.module.scss';

export const cx = classNames.bind(styles);

export type SocialMediaProps = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const SocialMediaItem = ({ title, href, icon }: SocialMediaProps) => (
  <LinkCustom
    className={cx('social-media')}
    href={href}
    variant="withCustomClassName"
    external
    data-testid="social-media"
  >
    {icon}
    <span className={cx('media-title')} data-testid="media-title">{title}</span>
  </LinkCustom>
);
