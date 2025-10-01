import classNames from 'classnames/bind';

import { FilterControlsProps } from '../types';
import { DesktopFilterControls } from './layouts/desktop-controls/desktop-controls';
import { MobileFilterControls } from './layouts/mobile-controls/mobile-controls';

import styles from './filter-controls.module.scss';

const cx = classNames.bind(styles);

export const FilterControls = (props: FilterControlsProps) => {
  const { isTabletLayout = false } = props;

  return (
    <div className={cx('filter-container', { tablet: isTabletLayout })}>
      {isTabletLayout ? <MobileFilterControls {...props} /> : <DesktopFilterControls {...props} />}
    </div>
  );
};
