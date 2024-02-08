import { useWindowSize } from '@/app/hooks';
import { NavLink } from 'react-router-dom';
import './nav-item.scss';

type NavItemProps = {
  label: string;
  href: string;
  toggleMenu: () => void;
};

export const NavItem = ({ label, href, toggleMenu }: NavItemProps) => {
  const { width } = useWindowSize();

  return (
    <NavLink className="menu-item" to={href} onClick={width <= 810 ? () => toggleMenu() : () => {}}>
      <div className="label">{label}</div>
    </NavLink>
  );
};
