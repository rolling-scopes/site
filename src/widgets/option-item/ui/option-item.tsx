// todo it not widget
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import './option-item.scss';

type OptionItemProps = {
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, linkLabel, href = '' }: OptionItemProps) => (
  <article key={title} className="option">
    <h3 className="option-title">{title}</h3>
    <Paragraph className="option-description">{description}</Paragraph>
    {linkLabel && (
      <LinkCustom href={href} variant="primary" external>
        {linkLabel}
      </LinkCustom>
    )}
  </article>
);
