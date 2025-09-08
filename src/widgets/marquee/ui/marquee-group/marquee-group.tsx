import classNames from 'classnames/bind';

import { MarqueeSectionData } from '@/widgets/marquee/types';
import { MarqueeItem } from '@/widgets/marquee/ui/marquee-item/marquee-item';

import styles from './marquee-group.module.scss';

const cx = classNames.bind(styles);

type MarqueeGroupProps = MarqueeSectionData & {
  hidden?: boolean;
};

export const MarqueeGroup = ({ items, hidden = false }: MarqueeGroupProps) => (
  <div className={cx('marquee-group')} aria-hidden={hidden}>
    {items.map((place) => (
      <MarqueeItem key={place}>{place}</MarqueeItem>
    ))}
  </div>
);
