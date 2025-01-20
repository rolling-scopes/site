import classNames from 'classnames/bind';

import { MentorFeedback, MentorFeedbackCard } from '@/entities/mentor';
import { Slider } from '@/shared/ui/slider';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-feedback.module.scss';

const cx = classNames.bind(styles);

type MentorsFeedbackProps = {
  mentorsFeedback: MentorFeedback[];
};

export const MentorsFeedback = ({ mentorsFeedback }: MentorsFeedbackProps) => {
  const slides = mentorsFeedback.map(({ name, course, review, photo }, index) => (
    <MentorFeedbackCard
      key={index}
      name={name}
      course={course}
      review={review}
      photo={photo}
    />
  ));

  return (
    <section className={cx('container')} data-testid="mentors-feedback">
      <div className={cx('content')}>
        <WidgetTitle mods="asterisk">Mentors’ Feedback</WidgetTitle>
        <div className={cx('slider-wrapper')} data-testid="mentors-feedback-list">
          <Slider
            className={cx('mentors-feedback-slider')}
            slides={slides}
            sliderProps={{
              spaceBetween: 32,
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};
