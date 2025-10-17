import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';
import { Separator } from 'radix-ui';

import { NavMenuLabel } from '../header';
import { generateNavItemsConfig, generateNavMenuData } from '../helpers/generate-nav-menu-data';
import { DropdownContent } from '../ui/dropdown/dropdown-content/dropdown-content';
import { DropdownWrapper } from '../ui/dropdown/dropdown-wrapper';
import { NavItem } from '../ui/nav-item/nav-item';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import { KEY_CODES, NAV_MENU_LABELS } from '@/shared/constants';
import { useOutsideClick } from '@/shared/hooks/use-outside-click/use-outside-click';
import { LangSwitcher } from '@/shared/ui/lang-switcher/lang-switcher';

import styles from '../header.module.scss';

const cx = classNames.bind(styles);

type DesktopMenuProps = {
  courses: Course[];
  coursesWithMentorship: Course[];
  isMentorshipPage: boolean;
};

export const DesktopMenu = ({
  courses,
  coursesWithMentorship,
  isMentorshipPage,
}: DesktopMenuProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<NavMenuLabel | null>(null);
  const wrapperRef = useRef<HTMLMenuElement>(null);
  const activeNavItemRef = useRef<HTMLButtonElement>(null);
  const activeDropdownItemRef = useRef<HTMLAnchorElement>(null);

  const pathname = usePathname();

  const iconSrc = isMentorshipPage ? iconBlue : iconYellow;

  const menuData = useMemo(
    () => generateNavMenuData(courses, coursesWithMentorship),
    [courses, coursesWithMentorship],
  );

  const navItemsData = generateNavItemsConfig(iconSrc);

  const onClose = useCallback(() => {
    setDropdownOpen(false);
    setActiveMenuItem(null);
  }, []);

  useOutsideClick(wrapperRef, onClose, isDropdownOpen);

  const handleNavItemClick = (label: NavMenuLabel) => {
    if (label === NAV_MENU_LABELS.DOCS) {
      setDropdownOpen(false);
      setActiveMenuItem(null);
      return;
    }

    const isSameItem = activeMenuItem === label;

    setDropdownOpen(!isSameItem);
    setActiveMenuItem(isSameItem ? null : label);
  };

  useEffect(() => {
    setDropdownOpen(false);
    setActiveMenuItem(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === KEY_CODES.ESCAPE && isDropdownOpen) {
        e.preventDefault();
        setDropdownOpen(false);
        setActiveMenuItem(null);
        activeNavItemRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen]);

  return (
    <>
      <menu ref={wrapperRef} className={cx('menu')} data-testid="desktop-menu">
        {navItemsData.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.url}
            activeNavItemRef={activeMenuItem === item.label ? activeNavItemRef : undefined}
            isActiveNavItem={activeMenuItem === item.label}
            isDropdownOpen={isDropdownOpen}
            onNavItemClick={() => handleNavItemClick(item.label)}
            onFocusDropdownItem={() => {
              setTimeout(() => {
                activeDropdownItemRef.current?.focus();
              }, 0);
            }}
          />
        ))}

        <DropdownWrapper isOpen={isDropdownOpen}>
          {activeMenuItem && (
            <DropdownContent
              menuData={menuData[activeMenuItem]}
              activeMenuItem={activeMenuItem}
              activeItemRef={activeDropdownItemRef}
            />
          )}
        </DropdownWrapper>
      </menu>

      <Separator.Root
        decorative
        className={cx('separator-root', 'separator')}
        orientation="vertical"
      />

      <LangSwitcher className={cx('lang-switcher-desktop')} />
    </>
  );
};
