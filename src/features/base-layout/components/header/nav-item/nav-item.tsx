import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownWrapper } from '../dropdown/dropdown-wrapper';
import { DropdownArrow } from '@/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

type NavItemProps = {
  label: string;
  href: string;
  dropdownInner?: ReactNode;
};

export const NavItem = ({ label, href, dropdownInner }: NavItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onClose = () => setDropdownOpen(false);
  const onOpen = () => setDropdownOpen(true);

  return (
    <div className={styles.menuItemWrapper}>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `
            ${styles.menuItem} 
            ${isActive ? styles.active : ''}
            ${dropdownInner ? styles.dropdownToggle : ''}
            ${isDropdownOpen ? styles.rotate : ''}
          `
        }
        data-outside-click-ignore
        onMouseLeave={onClose}
        onMouseEnter={onOpen}
        end>
        <p className={styles.label}>{label}</p>
        {dropdownInner && (
          <span className={styles.dropdownArrow}>
            <DropdownArrow />
          </span>
        )}
      </NavLink>
      {dropdownInner && (
        <DropdownWrapper onMouseLeave={onClose} onMouseEnter={onOpen} isOpen={isDropdownOpen}>
          {dropdownInner}
        </DropdownWrapper>
      )}
    </div>
  );
};
