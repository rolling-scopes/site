import classNames from 'classnames/bind';

import { LayoutProps } from '../../types';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from '../layouts.module.scss';

const cx = classNames.bind(styles);

export const DesktopMerchFilters = ({
  hasActiveFilters,
  searchFilters,
  tagFilters,
  onClearFilters,
}: LayoutProps) => {
  return (
    <div className={cx('controls-wrapper')}>
      <div className={cx('desktop-actions-wrapper')}>
        <Subtitle size="extra-small" weight="bold">
          Filter merch
        </Subtitle>
        <button
          className={cx('button', 'secondary', { active: hasActiveFilters })}
          onClick={onClearFilters}
        >
          Clear
        </button>
      </div>

      {searchFilters}

      {tagFilters}
    </div>
  );
};
