import { SchoolMenu } from '@/app/components';
import { useOutsideClick } from '@/app/hooks';

export interface DropdownProps {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
  isDropdownOpen: boolean;
  handleClose: () => void;
}
export const Dropdown = ({
  onMouseLeave,
  onMouseEnter,
  isDropdownOpen,
  handleClose,
}: DropdownProps) => {
  const clickRef = useOutsideClick(handleClose);

  return (
    <div
      className={`courses-dropdown ${isDropdownOpen ? 'open' : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="navbar-dropdown"
      ref={clickRef}>
      <SchoolMenu heading="all courses" color="dark" />
      <SchoolMenu heading="rs school" color="dark" />
    </div>
  );
};
