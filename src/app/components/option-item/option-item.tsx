import { LinkCustom } from '@/app/components';
import { ArrowIcon } from '@/icons';

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
      <LinkCustom
        href={href}
        icon={<ArrowIcon size="16px" />}
        button
        size="medium"
        variant="outlined"
        target="_blank"
      >
        {linkLabel}
      </LinkCustom>
    )}
  </div>
);
