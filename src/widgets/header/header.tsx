'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { generateNavItemsConfig, generateNavMenuData } from './helpers/generate-nav-menu-data';
import { BurgerMenu } from './ui/burger/burger';
import { DropdownWrapper } from './ui/dropdown/dropdown-wrapper';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { useOutsideClick } from '@/shared/hooks/use-outside-click/use-outside-click';
import { Logo } from '@/shared/ui/logo';
import { Paragraph } from '@/shared/ui/paragraph';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transform-courses-to-mentorship';
import { NavItem } from '@/widgets/header/ui/nav-item/nav-item';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';

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

  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);
  const iconSrc = isMentorshipPage ? iconBlue : iconYellow;
  const coursesWithMentorship = transformCoursesToMentorship(courses);

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
    () => generateNavMenuData(courses, coursesWithMentorship),
    [courses, coursesWithMentorship],
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

  return (
    <header className={cx('header')}>
      <nav className={cx('navbar')} data-testid="navigation">
        <section className={cx('navbar-content')}>
          <Logo logoSrc={isMentorshipPage ? logoBlue : undefined} />

          <menu className={cx('mobile-menu', { open: isMobileMenuOpen })} data-testid="mobile-menu">
            <MobileView
              onClose={handleMenuClose}
              courses={courses}
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
                isActiveNavItem={activeMenuItem === item.label}
                isDropdownOpen={isDropdownOpen}
                onNavItemClick={() => handleNavItemClick(item.label)}
                onDropdownClose={() => setDropdownOpen(false)}
              />
            ))}
            <DropdownWrapper isOpen={isDropdownOpen}>
              {activeMenuItem === NAV_MENU_LABELS.SUPPORT_US && (
                <div className={cx('support-text')}>
                  <Paragraph fontSize="small">
                    Your donations help us cover hosting, domains, licenses, and advertising for
                    courses and events. Every donation, big or small, helps!
                  </Paragraph>
                  <Paragraph fontSize="small">Thank you for your support!</Paragraph>
                </div>
              )}
              <SchoolMenu>
                {activeMenuItem
                  && menuData[activeMenuItem].map((option) => (
                    <SchoolMenu.Item
                      key={option.id}
                      icon={option.icon}
                      title={option.title}
                      description={option.description}
                      url={option.url}
                    />
                  ))}
              </SchoolMenu>
            </DropdownWrapper>
          </menu>
        </section>
      </nav>
    </header>
  );
};
