import { Button } from '../button';

import './option-item.scss';

export type OptionItemProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, buttonLabel, href = '' }: OptionItemProps) => (
  <div key={title} className="option">
    <h3 className="option-title">{title}</h3>
    <p className="option-description" role="text">
      {description}
    </p>
    {buttonLabel && (
      <Button
        label={buttonLabel}
        href={href}
        outlined={true}
        size="medium"
        color="black"
        target="_blank"
      />
    )}
  </div>
);
