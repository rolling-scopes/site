import classNames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorshipBenefits } from 'data';

import styles from './mentoring.module.scss';

const cx = classNames.bind(styles);

export const Mentoring = () => {
  return (
    <section className="container">
      <div className={cx('content')}>
        <WidgetTitle size="small">Mentoring is for you if you</WidgetTitle>
        <div className={cx('mentorship-benefits')}>
          {mentorshipBenefits.map(({ id, info }) => (
            <Paragraph key={id} className={cx('benefit-item')}>
              {info}
            </Paragraph>
          ))}
        </div>
      </div>
    </section>
  );
};
