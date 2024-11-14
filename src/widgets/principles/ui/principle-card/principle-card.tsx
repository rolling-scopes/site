import classnames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import type { PrincipleCard as TPrincipleCard } from '@/widgets/principles';

import styles from './principle-card.module.scss';

const cx = classnames.bind(styles);

export const PrincipleCard = ({ title, description, icon }: TPrincipleCard) => (
  <article className={cx('principle-card')} data-testid="principle-card">
    <span className={cx('icon')}>{icon}</span>
    <WidgetTitle className={cx('card-title')}>{title}</WidgetTitle>
    <Paragraph className={cx('card-description')}>{description}</Paragraph>
  </article>
);
