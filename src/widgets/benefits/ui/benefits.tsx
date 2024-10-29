import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { Benefit, ImageLink, benefitMentorshipHome } from 'data';

import styles from './benefits.module.scss';

const cx = classNames.bind(styles);

export type BenefitsProps = {
  header?: string;
  benefits?: Benefit[];
  flex?: boolean;
};

type BenefitItemProps = {
  classNames: string;
  icon?: ImageLink;
  text: string;
};

const shortBenefitMaxChars = 60;
const BenefitItem = ({ text, icon, classNames }: BenefitItemProps) => {
  return (
    <li className={classNames} data-testid="benefit">
      {(icon?.href && icon?.alt) && <Image className={cx('benefit-icon')} src={icon.href} alt={icon.alt} />}
      {text}
    </li>
  );
};

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
