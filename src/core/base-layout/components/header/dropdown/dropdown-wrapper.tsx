import { ForwardedRef, ReactNode, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './dropdown-wrapper.module.scss';

const cx = classNames.bind(styles);

export interface DropdownWrapperProps {
  isOpen: boolean;
  children: ReactNode;
}

export const DropdownWrapper = forwardRef<HTMLDivElement, DropdownWrapperProps>(
  function DropdownWrapper({ isOpen, children }, ref: ForwardedRef<HTMLDivElement>) {
    return (
      <div
        className={cx('courses-dropdown', { open: isOpen })}
        data-testid="header-dropdown"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
