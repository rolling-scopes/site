import React from 'react';

import './OptionItem.scss';

export interface OptionItemProps {
  title: string;
  description: string;
  buttonLabel?: string;
}

export const OptionItem: React.FC<OptionItemProps> = ({
  title,
  description,
  buttonLabel
}: OptionItemProps) => (
  <div key={title} className="option">
    <div className="option-title">{title}</div>
    <div className="option-description">{description}</div>
    {buttonLabel && <div className="option-button">{buttonLabel}</div>}
  </div>
);
