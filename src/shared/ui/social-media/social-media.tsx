import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './social-media.module.scss';

export const cx = classNames.bind(styles);

export type SocialMediaProps = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const SocialMedia = ({ title, href, icon }: SocialMediaProps) => (
  <a
    className={cx('social-media')}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="social-media"
  >
    {icon}
    <span className={cx('media-title')} data-testid="media-title">{title}</span>
  </a>
);
