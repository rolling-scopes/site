import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from './dropdown';
import { DropdownArrow } from '@/icons/dropdown-arrow';

type NavItemProps = {
  label: string;
  href?: string;
  dropdown?: boolean;
};

export const NavItem = ({ label, href, dropdown = false }: NavItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClose = () => setDropdownOpen(false);

  return (
    <>
      {href && !dropdown ? (
        <NavLink className="menu-item" to={href} end>
          <p className="label">{label}</p>
        </NavLink>
      ) : (
        <>
          <p
            className={`menu-item dropdown-toggle ${isDropdownOpen ? 'rotate' : ''}`}
            data-outside-click-ignore
            onClick={handleDropdownToggle}>
            <span className="label">{label}</span>
            <span className="dropdown-arrow">
              <DropdownArrow />
            </span>
          </p>
          <Dropdown
            onMouseLeave={handleClose}
            isDropdownOpen={isDropdownOpen}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
};
