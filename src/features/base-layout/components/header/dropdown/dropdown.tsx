import { SchoolMenu } from '@/app/components';
import { useOutsideClick } from '@/app/hooks';

import styles from './dropdown.module.scss';

export interface DropdownProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isOpen: boolean;
  onClose: () => void;
}
export const DropdownMenu = ({ onMouseLeave, onMouseEnter, isOpen, onClose }: DropdownProps) => {
  const clickRef = useOutsideClick(onClose);

  return (
    <div
      className={`${styles.coursesDropdown} ${isOpen ? styles.open : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="header-dropdown"
      ref={clickRef}>
      <SchoolMenu heading="all courses" color="dark" />
      <SchoolMenu heading="rs school" color="dark" />
    </div>
  );
};
