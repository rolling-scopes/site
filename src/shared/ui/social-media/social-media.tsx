import { ReactNode } from 'react';

import './social-media.scss';

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
