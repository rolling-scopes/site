import { ReactNode } from 'react';
import { LinkCustom } from '../link-custom';

import './social-media.scss';

export type SocialMediaProps = {
  title: string;
  href: string;
  icon: ReactNode;
};

export const SocialMedia = ({ title, href, icon }: SocialMediaProps) => (
  <LinkCustom
    className="social-media"
    href={href}
    variant="custom"
    external
  >
    {icon}
    <span className="text">{title}</span>
  </LinkCustom>
);
