import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './dropdown-wrapper.module.scss';

const cx = classNames.bind(styles);

export interface DropdownWrapperProps {
  isOpen: boolean;
  reverseLayout: boolean;
  children: ReactNode;
}

export const DropdownWrapper = function DropdownWrapper({
  isOpen,
  reverseLayout,
  children,
}: DropdownWrapperProps) {
  return (
    <div
      className={cx('courses-dropdown', { open: isOpen }, { 'reverse-layout': reverseLayout })}
      data-testid="header-dropdown"
    >
      {children}
    </div>
  );
};
