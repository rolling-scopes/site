import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { ROUTES } from '@/app/const';
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
    href: ROUTES.COURSES,
    dropdownInner: <SchoolMenu heading="all courses" color="dark" hasTitle={false} />,
  },
  {
    label: 'Community',
    href: ROUTES.COMMUNITY,
    dropdownInner: <SchoolMenu heading="community" color="dark" hasTitle={false} />,
  },
  {
    label: 'Mentorship',
    href: ROUTES.MENTORSHIP,
    dropdownInner: <SchoolMenu heading="mentorship" color="dark" hasTitle={false} />,
  },
];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const headerAccentColor = pathname.includes(ROUTES.MENTORSHIP) ? 'blue' : 'gray';

  const [color, setColor] = useState(headerAccentColor);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const listenScrollEvent = () => {
      const scrollY = window.scrollY;

      // setting the class depending on the scrolled height
      // class changes the background color of the header
      if (scrollY < 500) {
        setColor(headerAccentColor);
      } else {
        setColor('white');
      }
    };

    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, [headerAccentColor]);

  useEffect(() => {
    if (location.pathname) {
      setMenuOpen(false);
      setColor(headerAccentColor);
    }
  }, [pathname, headerAccentColor]);

  return (
    <nav className={cx('navbar', color)} data-testid="navigation">
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
