import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorsBenefitData } from 'data';

import styles from './mentors-benefit.module.scss';

const cx = classNames.bind(styles);

const shortBenefitMaxChars = 60;

export const MentorsBenefits = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('about-mentorship', 'content')}>
        <WidgetTitle>{mentorsBenefitData.header}</WidgetTitle>
        <ul className={cx('benefits')}>
          {mentorsBenefitData.benefits.map((info, index) => {
            let classNameWidth = ((info.text.length > shortBenefitMaxChars) ? 'benefit-long' : 'benefit-short');

            return (
              <li key={index} className={cx('benefit', classNameWidth)}>
                {(info.icon && info.iconAlt) && <Image className={cx('benefit-icon')} src={info.icon} alt={info.iconAlt} />}
                {info.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
