import cn from 'classnames';
import classNames from 'classnames/bind';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentoring.module.scss';

const cx = classNames.bind(styles);

const mentorshipBenefits = [
  {
    id: 1,
    info: 'Feel the desire to share your experience and knowledge',
  },
  {
    id: 2,
    info: 'Feeling a lack of communication',
  },
  {
    id: 3,
    info: 'You would like to upgrade your soft & hard skills',
  },
  {
    id: 4,
    info: 'Do you want to train acquaintances / friends / colleagues, but you do not have a ready curriculum or you studied at The Rollings Scopes School, and it\'s time for "Teach It Forward"',
  },
  {
    id: 5,
    info: 'Looking for beginner developers to join your company or project',
  },
];

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
