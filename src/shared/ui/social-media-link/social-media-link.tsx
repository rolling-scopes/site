/* eslint-disable @stylistic/jsx-closing-tag-location */

import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { LinkCustom } from '../link-custom';

import styles from './social-media-link.module.scss';

export const cx = classNames.bind(styles);

export type SocialMediaProps = {
  title: string;
  href?: string;
  icon?: StaticImageData;
  inline?: boolean;
};

export const SocialMediaLink = ({ title, href, icon, inline }: SocialMediaProps) => (
  <LinkCustom
    className={cx('social-media', { inline })}
    href={href}
    variant="withCustomClassName"
    external
    highContrast
    data-testid="social-media"
  >
    {icon
      && <span className={cx('media-icon')}>
        <Image src={icon} alt="" aria-hidden="true" />
      </span>}
    <span className={cx('media-title')} data-testid="media-title">
      {title}
    </span>
  </LinkCustom>
);
