import { ReactNode } from 'react';

import styles from './dropdown-wrapper.module.scss';

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
  return (
    <div
      className={`${styles.coursesDropdown} ${isOpen ? styles.open : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="header-dropdown">
      {children}
    </div>
  );
};
