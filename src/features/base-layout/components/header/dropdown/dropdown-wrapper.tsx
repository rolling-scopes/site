import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { usePositionDropdown } from '@/app/hooks';

import styles from './dropdown-wrapper.module.scss';

const cx = classNames.bind(styles);

export interface DropdownWrapperProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isOpen: boolean;
  children: ReactNode;
}
export const DropdownWrapper = ({
  onMouseLeave,
  onMouseEnter,
  isOpen,
  children,
}: DropdownWrapperProps) => {
  const dropdownRef = usePositionDropdown();

  return (
    <div
      className={cx('courses-dropdown', { open: isOpen })}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="header-dropdown"
      ref={dropdownRef}>
      {children}
    </div>
  );
};
