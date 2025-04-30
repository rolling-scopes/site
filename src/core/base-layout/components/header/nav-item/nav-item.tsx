import {
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { DropdownWrapper } from '../dropdown/dropdown-wrapper';
import { ROUTES } from '@/core/const';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import { KEY_CODES } from '@/shared/constants';
import { useOutsideClick } from '@/shared/hooks/use-outside-click/use-outside-click';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';

import styles from './nav-item.module.scss';

const cx = classNames.bind(styles);

type NavItemProps = PropsWithChildren & {
  label: string;
  href: string;
};

export const NavItem = ({ label, href, children }: NavItemProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDropdown = Boolean(children);
  const router = useRouter();

  const pathname = usePathname();
  const isHrefHome = href === ROUTES.HOME;
  const isActive = isHrefHome ? pathname === ROUTES.HOME : pathname?.includes(href);
  const linkHref = isHrefHome ? href : `/${href}`;
  const closeAllDropdowns = 'closeAllDropdowns';

  const onClose = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const onDropdownToggle = () => {
    if (!isDropdownOpen) {
      window.dispatchEvent(new CustomEvent(closeAllDropdowns));
    }

    setDropdownOpen((prev) => !prev);
  };

  const handleClick = () => {
    if (isDropdown) {
      onDropdownToggle();
    } else {
      router.push(linkHref);
    }
  };

  const handleEscKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === KEY_CODES.ESCAPE) {
      onClose();
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

  useOutsideClick(wrapperRef, onClose, isDropdownOpen);

  useEffect(() => {
    window.addEventListener(closeAllDropdowns, onClose);

    return () => {
      window.removeEventListener(closeAllDropdowns, onClose);
    };
  }, [onClose]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <div
      className={cx('menu-item-wrapper')}
      ref={wrapperRef}
      onKeyDown={handleConfirmKeyPress}
      data-testid="menu-item"
    >
      <button
        ref={buttonRef}
        className={cx(
          'menu-item',
          { active: isActive },
          { 'dropdown-toggle': isDropdown },
          { rotate: isDropdownOpen },
        )}
        onClick={handleClick}
      >
        {label === 'Support Us'
          && (pathname.includes(ROUTES.MENTORSHIP)
            ? (
                <Image
                  src={iconBlue}
                  alt="Donate-icon"
                  width={18}
                  height={16}
                  aria-hidden="true"
                  data-testid="school-item-icon"
                />
              )
            : (
                <Image
                  src={iconYellow}
                  alt="Donate-icon"
                  width={18}
                  height={16}
                  aria-hidden="true"
                  data-testid="school-item-icon"
                />
              ))}
        <span className={cx('label-bold')}>
          {label}
          <span className={cx('label-content')} aria-hidden="true">
            {label}
          </span>
        </span>
        {isDropdown && (
          <span className={cx('dropdown-arrow')} role="button" aria-expanded={isDropdownOpen}>
            <DropdownArrow />
          </span>
        )}
      </button>
      {isDropdown && <DropdownWrapper isOpen={isDropdownOpen}>{children}</DropdownWrapper>}
    </div>
  );
};
