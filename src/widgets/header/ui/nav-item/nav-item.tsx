import { KeyboardEvent, PropsWithChildren, RefObject } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import arrowIcon from '@/shared/assets/svg/dropdown-arrow.svg';
import { KEY_CODES, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { NavMenuLabel } from '@/widgets/header/header';

import styles from './nav-item.module.scss';

const cx = classNames.bind(styles);

type NavItemProps = PropsWithChildren & {
  label: NavMenuLabel;
  href: string;
  icon?: StaticImageData;
  activeNavItemRef?: RefObject<HTMLButtonElement | null>;
  isActiveNavItem: boolean;
  isDropdownOpen: boolean;
  onNavItemClick: () => void;
  onFocusDropdownItem: () => void;
};

export const NavItem = ({
  label,
  href,
  icon,
  activeNavItemRef,
  isActiveNavItem,
  isDropdownOpen,
  onNavItemClick,
  onFocusDropdownItem,
}: NavItemProps) => {
  const isDropdown = label !== NAV_MENU_LABELS.DOCS;
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

  const handleConfirmKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === KEY_CODES.ENTER || e.code === KEY_CODES.SPACE) {
      e.preventDefault();
      handleClick();
    }

    if (isDropdown) {
      onFocusDropdownItem();
    }
  };

  return (
    <div className={cx('menu-item-wrapper')} data-testid="menu-item" onClick={handleClick}>
      <button
        ref={activeNavItemRef}
        className={cx(
          'menu-item',
          { active: isActive },
          { 'dropdown-toggle': isDropdown },
          { rotate: isActiveNavItem },
        )}
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
            <Image src={arrowIcon} alt="dropdown-arrow" aria-label="dropdown-arrow" />
          </span>
        )}
      </button>
    </div>
  );
};
