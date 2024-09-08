import {
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import { NavLink, useLocation } from 'react-router-dom';
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

  const dropdownToggleRef = useRef<HTMLButtonElement>(null);

  const onClose = () => setDropdownOpen(false);
  const onOpen = () => setDropdownOpen(true);

  const location = useLocation();

  const handleConfirmKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleEscKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Escape') {
      onClose();
      dropdownToggleRef.current?.focus();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <div className={cx('menu-item-wrapper')} onBlur={handleBlur} onKeyDown={handleEscKeyPress}>
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
      >
        <span className={cx('label')}>{label}</span>
        {dropdownInner && (
          <button
            onKeyDown={handleConfirmKeyPress}
            ref={dropdownToggleRef}
            className={cx('dropdown-arrow')}
            aria-expanded={isDropdownOpen}
          >
            <DropdownArrow />
          </button>
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
