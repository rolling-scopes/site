import React from 'react';

import './OptionItem.scss';

export interface OptionItemProps {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
}

export const OptionItem: React.FC<OptionItemProps> = ({
  title,
  description,
  buttonLabel,
  href
}: OptionItemProps) => (
  <div key={title} className="option">
    <div className="option-title">{title}</div>
    <div className="option-description">{description}</div>
    {buttonLabel && (
      <a href={href} target="_blank" rel="noreferrer" className="option-button">
        {buttonLabel}
      </a>
    )}
  </div>
);
