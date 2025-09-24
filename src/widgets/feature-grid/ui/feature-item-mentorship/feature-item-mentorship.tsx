import { ReactNode } from 'react';
import classnames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { Subtitle } from '@/shared/ui/subtitle';

import styles from './feature-item-mentorship.module.scss';

const cx = classnames.bind(styles);

type FeatureItemMentorshipProps = {
  title: string;
  description: ReactNode;
  icon: StaticImageData;
};

export const FeatureItemMentorship = ({ title, description, icon }: FeatureItemMentorshipProps) => (
  <article className={cx('feature-item-mentorship')} data-testid="feature-item-mentorship">
    <div className={cx('icon')}>
      <div className={cx('icon-accent')}></div>
      <Image src={icon} alt="" data-testid="feature-item-mentorship-icon" />
    </div>
    <Subtitle className={cx('item-title')} size="large" weight="bold">
      {title}
    </Subtitle>
    <div className={cx('item-description')}>{description}</div>
  </article>
);
