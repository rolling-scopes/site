import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownMenu } from '../dropdown/dropdown';
import { DropdownArrow } from '@/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

type NavItemProps = {
  label: string;
  href?: string;
  dropdown?: boolean;
};

export const NavItem = ({ label, href, dropdown = false }: NavItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onClose = () => setDropdownOpen(false);
  const onOpen = () => setDropdownOpen(true);

  return (
    <>
      {href && !dropdown ? (
        <NavLink className={styles.menuItem} to={href} end>
          <p className={styles.label}>{label}</p>
        </NavLink>
      ) : (
        <>
          <p
            className={`${styles.menuItem} ${styles.dropdownToggle} ${isDropdownOpen ? styles.rotate : ''}`}
            data-outside-click-ignore
            onMouseLeave={onClose}
            onMouseEnter={onOpen}>
            <span className={styles.label}>{label}</span>
            <span className={styles.dropdownArrow}>
              <DropdownArrow />
            </span>
          </p>
          <DropdownMenu
            onMouseLeave={onClose}
            onMouseEnter={onOpen}
            isOpen={isDropdownOpen}
            onClose={onClose}
          />
        </>
      )}
    </>
  );
};
