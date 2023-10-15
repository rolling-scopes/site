import React from 'react';

import './SocialMedia.scss';

interface SocialMediaProps {
  title: string;
  href: string;
  Icon: React.FC;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({
  title,
  href,
  Icon
}: SocialMediaProps) => (
  <a className="social-media" href={href} target="_blank" rel="noreferrer">
    <Icon />
    <span className="text">{title}</span>
  </a>
);
