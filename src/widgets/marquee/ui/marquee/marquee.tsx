import classNames from 'classnames/bind';

import { MarqueeSectionData } from '@/widgets/marquee/types';
import { MarqueeGroup } from '@/widgets/marquee/ui/marquee-group/marquee-group';

import styles from './marquee.module.scss';

const cx = classNames.bind(styles);

export const Marquee = ({ items }: MarqueeSectionData) => (
  <section className={cx('marquee', 'container')} data-testid="marquee">
    <div className={cx('marquee', 'content')}>
      <MarqueeGroup items={items} />
      <MarqueeGroup items={items} hidden />
      <MarqueeGroup items={items} hidden />
    </div>
  </section>
);
