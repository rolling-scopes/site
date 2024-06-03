import { ReactNode } from 'react';
import { usePositionDropdown } from '@/app/hooks';

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
  const dropdownRef = usePositionDropdown();

  return (
    <div
      className={`${styles.coursesDropdown} ${isOpen ? styles.open : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="header-dropdown"
      ref={dropdownRef}>
      {children}
    </div>
  );
};
