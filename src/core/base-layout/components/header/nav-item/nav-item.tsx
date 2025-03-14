import {
  FocusEvent,
  KeyboardEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DropdownWrapper } from '../dropdown/dropdown-wrapper';
import { ROUTES } from '@/core/const';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

const cx = classNames.bind(styles);

type NavItemProps = PropsWithChildren & {
  label: string;
  href: string;
};

export const NavItem = ({ label, href, children }: NavItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggleRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const onClose = () => setDropdownOpen(false);
  const onOpen = () => setDropdownOpen(true);

  const pathname = usePathname();
  const isHrefHome = href === ROUTES.HOME;
  const isActive = isHrefHome
    ? pathname === ROUTES.HOME
    : pathname?.includes(href.replaceAll(ROUTES.HOME, ''));
  const linkHref = isHrefHome ? href : `/${href}`;

  const handleEscKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Escape') {
      onClose();
      dropdownToggleRef.current?.focus();
    }
  };

  const handleConfirmKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);

      linkRef.current?.click();
    }
    handleEscKeyPress(e);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <div
      className={cx('menu-item-wrapper')}
      onBlur={handleBlur}
      onKeyDown={handleConfirmKeyPress}
      data-testid="menu-item"
    >
      <Link
        ref={linkRef}
        href={linkHref}
        className={cx(
          'menu-item',
          { active: isActive },
          { 'dropdown-toggle': Boolean(children) },
          { rotate: isDropdownOpen },
        )}
        onMouseLeave={onClose}
        onMouseEnter={onOpen}
      >
        <span className={cx('label')}>{label}</span>
        {children && (
          <button
            ref={dropdownToggleRef}
            className={cx('dropdown-arrow')}
            aria-expanded={isDropdownOpen}
            tabIndex={-1}
          >
            <DropdownArrow />
          </button>
        )}
      </Link>
      {children && (
        <DropdownWrapper onMouseLeave={onClose} onMouseEnter={onOpen} isOpen={isDropdownOpen}>
          {children}
        </DropdownWrapper>
      )}
    </div>
  );
};
