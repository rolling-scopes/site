import classNames from 'classnames/bind';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-benefit.module.scss';

const cx = classNames.bind(styles);

type MentorsBenefitsProps = {
  benefits: string[];
  lang?: 'en' | 'ru';
};

const COUNT_SYMBOLS = 60;
const textContent = {
  en: { header: 'Mentorship is for you if you' },
  ru: { header: 'Быть ментором для вас если вы' },
};

export const MentorsBenefits = ({ benefits, lang = 'en' }: MentorsBenefitsProps) => {
  return (
    <section className={cx('container')}>
      <div className={cx('about-mentorship', 'content')}>
        <WidgetTitle className={cx('title')}>{textContent[lang].header}</WidgetTitle>
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
