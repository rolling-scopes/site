import classnames from 'classnames/bind';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { HighlightCardData } from '@/widgets/principles/types';

import styles from './principle-card.module.scss';

const cx = classnames.bind(styles);

export const HighlightCard = ({ heading, content, icon }: HighlightCardData) => (
  <article className={cx('principle-card')} data-testid="principle-card">
    <span className={cx('icon')}>
      <img src={icon.src} alt="" aria-hidden="true" />
    </span>
    <WidgetTitle className={cx('card-title')}>{heading}</WidgetTitle>
    {/* <Paragraph className={cx('card-description')}>{description}</Paragraph> */}
    <div className={cx('card-description')}>{content}</div>
  </article>
);
