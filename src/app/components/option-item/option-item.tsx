import { LinkCustom } from '../link-custom';
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
      <LinkCustom href={href} button={true} size="medium" outlined={true} target="_blank">
        {linkLabel} <ArrowIcon size="16px" invertIconColor={true} />
      </LinkCustom>
    )}
  </div>
);
