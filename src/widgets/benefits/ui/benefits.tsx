import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { Benefit, benefitMentorshipHome } from 'data';

import styles from './benefits.module.scss';

const cx = classNames.bind(styles);

export type BenefitsProps = {
  header?: string;
  benefits?: Benefit[];
  flex?: boolean;
};

const shortBenefitMaxChars = 60;

export const Benefits = ({ header = benefitMentorshipHome.header,
  benefits = benefitMentorshipHome.benefits,
  flex = benefitMentorshipHome.flex }: BenefitsProps,
) => {
  return (
    <section className="container">
      <div className={cx('content')}>
        <WidgetTitle size="small">{header}</WidgetTitle>
        <ul className={cx((flex ? 'benefits-flex' : 'benefits-grid'))}>
          {benefits?.map(({ id, text, icon }) => {
            let classNameWidth = ((text.length > shortBenefitMaxChars) ? 'item-long' : 'item-short');

            return (
              <li key={id} className={cx(flex ? 'flex-item' : 'grid-item', classNameWidth)} data-testid="benefit">
                {(icon?.href && icon?.alt)
                && <Image className={cx('benefit-icon')} src={icon.href} alt={icon.alt} />}
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
