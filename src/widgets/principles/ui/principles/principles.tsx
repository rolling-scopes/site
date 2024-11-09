import classnames from 'classnames/bind';
import { cards } from '../../constants';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { PrincipleCard } from '@/widgets/principles/ui/principle-card/principle-card.tsx';

import styles from './principles.module.scss';

const cx = classnames.bind(styles);

export const Principles = () => (
  <div className={cx('principles', 'container')}>
    <div className={cx('principles', 'content')}>
      <WidgetTitle size="large" mods="lines">
        RS School Principles are an ability to complete our mission
      </WidgetTitle>
      <div className={cx('column-3', 'cards')}>
        {cards.map(({ title, description, icon }) => (
          <PrincipleCard key={title} description={description} icon={icon} title={title} />
        ))}
      </div>
    </div>
  </div>
);
