import classNames from 'classnames/bind';
import { places } from '@/widgets/places/constants';
import PlaceItem from '@/widgets/places/ui/place-item/place-item';

import styles from './marquee-group.module.scss';

const cx = classNames.bind(styles);

type MarqueeGroupProps = {
  hidden?: boolean;
};

export const MarqueeGroup = ({ hidden = false }: MarqueeGroupProps) => (
  <div className={cx('marquee-group')} aria-hidden={hidden}>
    {places.map((place) => (
      <PlaceItem key={place}>{place}</PlaceItem>
    ))}
  </div>
);
