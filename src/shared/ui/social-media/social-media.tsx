import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { LinkCustom } from '../link-custom';

import styles from './social-media.module.scss';

export const cx = classNames.bind(styles);

export type SocialMediaProps = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const SocialMedia = ({ title, href, icon }: SocialMediaProps) => (
  <LinkCustom
    className={cx('social-media')}
    href={href}
    variant="custom"
    external
    data-testid="social-media"
  >
    {icon}
    <span className={cx('media-title')} data-testid="media-title">{title}</span>
  </LinkCustom>
);
