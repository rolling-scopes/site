import classNames from 'classnames/bind';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { shortBenefitMaxChars } from '@/widgets/benefits/constants';
import { BenefitsProps } from '@/widgets/benefits/types';
import { BenefitItem } from '@/widgets/benefits/ui/benefit-item/benefit-item';
import { benefitMentorshipHome } from 'data';

import styles from './benefits.module.scss';

const cx = classNames.bind(styles);

export const Benefits = ({
  header = benefitMentorshipHome.header,
  benefits = benefitMentorshipHome.benefits,
  flex = benefitMentorshipHome.flex,
}: BenefitsProps,
) => {
  return (
    <section className="container">
      <div className={cx('content')}>
        <WidgetTitle size="small">{header}</WidgetTitle>
        <ul className={cx((flex ? 'benefits-flex' : 'benefits-grid'))} aria-label="Member benefits">
          {benefits?.map(({ id, text, icon }) => {
            return (
              <BenefitItem
                key={id}
                text={text}
                icon={icon}
                classNames={cx({
                  'item-long': text.length > shortBenefitMaxChars,
                  'item-short': text.length <= shortBenefitMaxChars,
                  'flex-item': flex,
                  'grid-item': !flex,
                })}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
