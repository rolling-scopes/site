import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './option-item.module.scss';

const cx = classNames.bind(styles);

type OptionItemProps = {
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
  external?: boolean;
};

export const OptionItem = ({ title, description, linkLabel, href = '', external = true }: OptionItemProps) => (
  <article key={title} className={cx('option-item')} data-testid="option-item">
    <Subtitle>{title}</Subtitle>
    <Paragraph fontSize="large">{description}</Paragraph>
    {linkLabel && (
      <LinkCustom href={href} variant="primary" external={external}>
        {linkLabel}
      </LinkCustom>
    )}
  </article>
);
