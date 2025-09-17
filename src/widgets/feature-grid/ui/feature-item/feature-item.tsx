import classNames from 'classnames/bind';
import Image from 'next/image';

import { Subtitle } from '@/shared/ui/subtitle';
import { FeatureItemData } from '@/widgets/feature-grid/types';

import styles from './feature-item.module.scss';

export const cx = classNames.bind(styles);

type GridItemProps = Omit<FeatureItemData, 'variant'>;

export const FeatureItem = ({ heading, content, icon }: GridItemProps) => {
  return (
    <article className={cx('feature-item')} data-testid="feature-item">
      <header className={cx('item-title')}>
        <Image
          className={cx('item-icon')}
          src={icon}
          aria-hidden="true"
          alt=""
          data-testid="item-icon"
        />

        <Subtitle size="extra-small">{heading}</Subtitle>
      </header>
      {content}
    </article>
  );
};
