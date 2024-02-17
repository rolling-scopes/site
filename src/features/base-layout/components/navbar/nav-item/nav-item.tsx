import { NavLink } from 'react-router-dom';
import './nav-item.scss';

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <NavLink className="menu-item" to={href}>
      <div className="label">{label}</div>
    </NavLink>
  );
};
