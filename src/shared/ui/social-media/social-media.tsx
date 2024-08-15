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
  <a className="social-media" href={href} target="_blank" rel="noreferrer">
    {icon}
    <span className="text">{title}</span>
  </a>
);
