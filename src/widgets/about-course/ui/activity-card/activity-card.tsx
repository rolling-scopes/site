import { ReactNode } from 'react';
import classnames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { Subtitle } from '@/shared/ui/subtitle';

import styles from './activity-card.module.scss';

const cx = classnames.bind(styles);

type ActivityCardProps = {
  title: string;
  description: ReactNode;
  icon: StaticImageData;
};

export const ActivityCard = ({ title, description, icon }: ActivityCardProps) => (
  <article className={cx('activity-card')} data-testid="activity-card">
    <div className={cx('icon')}>
      <div className={cx('icon-accent')}></div>
      <Image src={icon} alt="" data-testid="activity-card-icon" />
    </div>
    <Subtitle className={cx('card-title')} size="large" weight="bold">
      {title}
    </Subtitle>
    <div className={cx('card-description')}>{description}</div>
  </article>
);
