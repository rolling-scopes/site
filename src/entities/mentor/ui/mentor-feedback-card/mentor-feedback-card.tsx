import classNames from 'classnames/bind';
import Image from 'next/image';
import { MentorFeedback } from '../../types';

import styles from './mentor-feedback-card.module.scss';

const cx = classNames.bind(styles);

type MentorFeedbackCardProps = MentorFeedback;

export const MentorFeedbackCard = ({ name, course, review, photo }: MentorFeedbackCardProps) => {
  return (
    <article className={cx('mentor-feedback-card')} data-testid="mentor-feedback-card">
      <div className={cx('card-info')}>
        <div className={cx('card-picture')}>
          <Image src={photo} alt={`${name} ${course}`} />
        </div>
        <header className={cx('card-header')}>
          <h3 className={cx('card-title')}>{name}</h3>
          <h4 className={cx('card-subtitle')}>
            <b>Course:</b>
            {' '}
            {course}
          </h4>
        </header>
      </div>
      <p className={cx('card-content')}>{review}</p>
    </article>
  );
};
