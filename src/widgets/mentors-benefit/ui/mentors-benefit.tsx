import classNames from 'classnames/bind';
import { ANCHORS } from '@/app/const';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorsBenefitData } from 'data';

import styles from './mentors-benefit.module.scss';

const cx = classNames.bind(styles);

type MentorsBenefitsProps = {
  benefits: string[];
  lang?: 'en' | 'ru';
};

const COUNT_SYMBOLS = 60;

export const MentorsBenefits = ({ benefits, lang = 'en' }: MentorsBenefitsProps) => {
  return (
    <section className={cx('container')} id={ANCHORS.MENTORSHIP_ABOUT}>
      <div className={cx('about-mentorship', 'content')}>
        <WidgetTitle className={cx('title')}>{mentorsBenefitData[lang].header}</WidgetTitle>
        <ul className={cx('benefits')}>
          {benefits.map((info, index) => {
            let classNameWidth = ((info.length > COUNT_SYMBOLS) ? 'benefit-long' : 'benefit-short');

            return (
              <li key={index} className={cx('benefit', classNameWidth)}>
                {info}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
