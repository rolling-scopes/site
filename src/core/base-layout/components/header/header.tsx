'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { ROUTES } from '@/core/const';
import { Logo } from '@/shared/ui/logo';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const navLinks = [
  {
    label: 'RS School',
    href: ROUTES.HOME,
    dropdownInner: <SchoolMenu heading="rs school" color="dark" hasTitle={false} />,
  },
  {
    label: 'Courses',
    href: `/${ROUTES.COURSES}`,
    dropdownInner: <SchoolMenu heading="all courses" color="dark" hasTitle={false} />,
  },
  {
    label: 'Community',
    href: `/${ROUTES.COMMUNITY}`,
    dropdownInner: <SchoolMenu heading="community" color="dark" hasTitle={false} />,
  },
];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={cx('navbar')} data-testid="navigation">
      <section className={cx('navbar-content')}>
        <Logo />

        <menu className={cx('mobile-menu', { open: isMenuOpen })} data-testid="mobile-menu">
          <MobileView type="header" />
        </menu>
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <menu className={cx('menu')}>
          {navLinks.map((link) => {
            return (
              <NavItem
                key={link.label}
                label={link.label}
                href={link.href}
                dropdownInner={link.dropdownInner}
              />
            );
          })}
        </menu>
      </section>
    </nav>
  );
};
