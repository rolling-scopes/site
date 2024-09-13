// todo it not widget
import { LinkCustom } from '@/shared/ui/link-custom';

import './option-item.scss';

export type OptionItemProps = {
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, linkLabel, href = '' }: OptionItemProps) => (
  <div key={title} className="option">
    <h3 className="option-title">{title}</h3>
    <p className="option-description" role="text">
      {description}
    </p>
    {linkLabel && (
      <LinkCustom href={href} variant="primary" external>
        {linkLabel}
      </LinkCustom>
    )}
  </div>
);
