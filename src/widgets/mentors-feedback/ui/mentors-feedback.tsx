import classNames from 'classnames/bind';
import { MentorFeedback, MentorFeedbackCard } from '@/entities/mentor';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-feedback.module.scss';

const cx = classNames.bind(styles);

type MentorsFeedbackProps = {
  mentorsFeedback: MentorFeedback[];
};

export const MentorsFeedback = ({ mentorsFeedback }: MentorsFeedbackProps) => {
  return (
    <section className={cx('container')} data-testid="mentors-feedback">
      <div className={cx('mentors-feedback-content', 'content')}>
        <WidgetTitle mods="asterisk">Mentors’ Feedback</WidgetTitle>
        <div className={cx('mentors-feedback-list')} data-testid="mentors-feedback-list">
          {mentorsFeedback.map(({ name, course, review, photo }, index) => (
            <MentorFeedbackCard
              key={index}
              name={name}
              course={course}
              review={review}
              photo={photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
