import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';

import './option-item.scss';

type OptionItemProps = {
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
};

export const OptionItem = ({ title, description, linkLabel, href = '' }: OptionItemProps) => (
  <article key={title} className="option" data-testid="option">
    <Subtitle className="option-title">{title}</Subtitle>
    <Paragraph className="option-description">{description}</Paragraph>
    {linkLabel && (
      <LinkCustom href={href} variant="primary" external>
        {linkLabel}
      </LinkCustom>
    )}
  </article>
);
