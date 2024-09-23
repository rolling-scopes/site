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
};

export const OptionItem = ({ title, description, linkLabel, href = '' }: OptionItemProps) => (
  <article key={title} className={cx('option')} data-testid="option">
    <Subtitle fontSize="medium" color="gray">
      {title}
    </Subtitle>
    <Paragraph fontSize="large" className={cx('option-description')}>
      {description}
    </Paragraph>
    {linkLabel && (
      <LinkCustom href={href} variant="primary" external>
        {linkLabel}
      </LinkCustom>
    )}
  </article>
);
