import classnames from 'classnames/bind';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { HighlightCardData } from '@/widgets/highlight-card/types';

import styles from './highlight-card.module.scss';

const cx = classnames.bind(styles);

export const HighlightCard = ({ heading, content, icon }: HighlightCardData) => (
  <article className={cx('highlight-card')} data-testid="highlight-card">
    <span className={cx('icon')} data-testid="highlight-icon">
      <img src={icon.src} alt="" aria-hidden="true" />
    </span>
    <WidgetTitle className={cx('card-title')}>{heading}</WidgetTitle>
    <div className={cx('card-description')}>{content}</div>
  </article>
);
