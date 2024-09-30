import cn from 'classnames';
import classNames from 'classnames/bind';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorshipBenefits } from 'data';

import styles from './mentoring.module.scss';

const cx = classNames.bind(styles);

export const Mentoring = () => {
  return (
    <section className="container">
      <div className={cn(cx('mentoring-content'), 'content')}>
        <WidgetTitle size="small">Mentoring is for you if you</WidgetTitle>
        <div className={cx('benefits')}>
          {mentorshipBenefits.map(({ id, info }) => (
            <article key={id} className={cx('benefit')}>
              {info}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
