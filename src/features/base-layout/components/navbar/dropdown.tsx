import { SchoolMenu } from '@/app/components';
import { useOutsideClick } from '@/app/hooks';

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
      className={`courses-dropdown ${isOpen ? 'open' : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      data-testid="navbar-dropdown"
      ref={clickRef}>
      <SchoolMenu heading="all courses" color="dark" />
      <SchoolMenu heading="rs school" color="dark" />
    </div>
  );
};
