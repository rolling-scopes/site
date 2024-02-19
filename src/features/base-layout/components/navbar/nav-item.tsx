import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown } from './dropdown';

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
          <div className="label">{label}</div>
        </NavLink>
      ) : (
        <div
          className={`menu-item dropdown-toggle ${isDropdownOpen ? 'rotate' : ''}`}
          data-outside-click-ignore
          onClick={handleDropdownToggle}>
          <div className="label">{label}</div>
          {dropdown && (
            <span className="dropdown-arrow">
              <svg
                aria-label="dropdown-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '100%', height: '100%' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          )}
        </div>
      )}
      <Dropdown
        onMouseLeave={() => setDropdownOpen(false)}
        isDropdownOpen={isDropdownOpen}
        handleClose={handleClose}
      />
    </>
  );
};
