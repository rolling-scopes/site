import { ReactNode, useState } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { DropdownWrapper } from '../dropdown/dropdown-wrapper';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

const cx = classNames.bind(styles);

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
    <div className={cx('menu-item-wrapper')}>
      <NavLink
        to={href}
        className={
          ({ isActive }) =>
            cx(
              'menu-item',
              { active: isActive },
              { 'dropdown-toggle': !!dropdownInner },
              { rotate: isDropdownOpen },
            )
        }
        onMouseLeave={onClose}
        onMouseEnter={onOpen}
        end
      >
        <p className={cx('label')}>{label}</p>
        {dropdownInner && (
          <span className={cx('dropdown-arrow')}>
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
