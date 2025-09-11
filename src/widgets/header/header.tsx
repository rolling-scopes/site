'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { generateNavItemsConfig, generateNavMenuData } from './helpers/generate-nav-menu-data';
import { BurgerMenu } from './ui/burger/burger';
import { DropdownContent } from './ui/dropdown/dropdown-content/dropdown-content';
import { DropdownWrapper } from './ui/dropdown/dropdown-wrapper';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { KEY_CODES, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { useOutsideClick } from '@/shared/hooks/use-outside-click/use-outside-click';
import { Logo } from '@/shared/ui/logo';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transform-courses-to-mentorship';
import { NavItem } from '@/widgets/header/ui/nav-item/nav-item';
import { MobileView } from '@/widgets/mobile-view';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

type HeaderProps = {
  courses: Course[];
};

export const Header = ({ courses }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<NAV_MENU_LABELS | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLMenuElement>(null);
  const activeDropdownItemRef = useRef<HTMLAnchorElement>(null);
  const activeNavItemRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);
  const iconSrc = isMentorshipPage ? iconBlue : iconYellow;
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
    sort: false,
  });
  const coursesWithMentorship = transformCoursesToMentorship(actualCourses);

  // mobile menu logic

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // desktop menu logic

  const menuData = useMemo(
    () => generateNavMenuData(actualCourses, coursesWithMentorship),
    [actualCourses, coursesWithMentorship],
  );

  const navItemsData = generateNavItemsConfig(iconSrc);

  const onClose = useCallback(() => {
    setDropdownOpen(false);
    setActiveMenuItem(null);
  }, []);

  useOutsideClick(wrapperRef, onClose, isDropdownOpen);

  const handleNavItemClick = (label: NAV_MENU_LABELS) => {
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
    <header className={cx('header')}>
      <nav className={cx('navbar')} data-testid="navigation">
        <section className={cx('navbar-content')}>
          <Logo logoSrc={isMentorshipPage ? logoBlue : undefined} />

          <menu className={cx('mobile-menu', { open: isMobileMenuOpen })} data-testid="mobile-menu">
            <MobileView
              onClose={handleMenuClose}
              courses={actualCourses}
              type="header"
              logoIcon={isMentorshipPage ? logoBlue : undefined}
              isMenuOpen={isMobileMenuOpen}
            />
          </menu>
          <BurgerMenu isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />

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
        </section>
      </nav>
    </header>
  );
};
