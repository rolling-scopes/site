import { KeyboardEvent, PropsWithChildren, useRef } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { KEY_CODES, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

const cx = classNames.bind(styles);

type NavItemProps = PropsWithChildren & {
  label: NAV_MENU_LABELS;
  href: string;
  icon?: StaticImageData;
  isActiveNavItem: boolean;
  isDropdownOpen: boolean;
  onNavItemClick: () => void;
  onDropdownClose: () => void;
};

export const NavItem = ({
  label,
  href,
  icon,
  isActiveNavItem,
  isDropdownOpen,
  onNavItemClick,
  onDropdownClose,
}: NavItemProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDropdown = Boolean(label !== NAV_MENU_LABELS.DOCS);
  const router = useRouter();

  const pathname = usePathname();
  const isHrefHome = href === ROUTES.HOME;
  const isActive = isHrefHome ? pathname === ROUTES.HOME : pathname?.includes(href);
  const linkHref = isHrefHome ? href : `/${href}`;

  const handleClick = () => {
    onNavItemClick();
    if (!isDropdown) {
      router.push(linkHref);
    }
  };

  const handleEscKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === KEY_CODES.ESCAPE) {
      onDropdownClose();
      buttonRef.current?.focus();
    }
  };

  const handleConfirmKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === KEY_CODES.ENTER || e.code === KEY_CODES.SPACE) {
      e.preventDefault();
      handleClick();
    }
    handleEscKeyPress(e);
  };

  return (
    <div className={cx('menu-item-wrapper')} data-testid="menu-item" onKeyDown={handleEscKeyPress}>
      <button
        ref={buttonRef}
        className={cx(
          'menu-item',
          { active: isActive },
          { 'dropdown-toggle': isDropdown },
          { rotate: isActiveNavItem },
        )}
        onClick={handleClick}
        onKeyDown={handleConfirmKeyPress}
      >
        {icon && (
          <Image
            src={icon}
            alt={`${label} icon`}
            width={18}
            height={16}
            aria-hidden="true"
            data-testid="nav-item-icon"
          />
        )}
        <span className={cx('label-bold')}>
          {label}
          <span className={cx('label-content')} aria-hidden="true" data-testid="label-content">
            {label}
          </span>
        </span>
        {isDropdown && (
          <span className={cx('dropdown-arrow')} role="button" aria-expanded={isDropdownOpen}>
            <DropdownArrow />
          </span>
        )}
      </button>
    </div>
  );
};
