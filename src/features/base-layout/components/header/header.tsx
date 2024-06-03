import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { LogoWrapper, MobileView, SchoolMenu } from '@/app/components';
import { useWindowSize } from '@/app/hooks';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const navLinks = [
  {
    label: 'RS School',
    href: '/#main',
    dropdownInner: <SchoolMenu heading="rs school" color="dark" hasTitle={false} />,
  },
  {
    label: 'Courses',
    href: '/courses/#main',
    dropdownInner: <SchoolMenu heading="all courses" color="dark" hasTitle={false} />,
  },
  {
    label: 'Community',
    href: '/community/#main',
    dropdownInner: <SchoolMenu heading="community" color="dark" hasTitle={false} />,
  },
];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');
  const { key, hash, pathname } = useLocation();
  const { width } = useWindowSize();
  const isMobile = width <= 810;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const listenScrollEvent = () => {
      const scrollY = window.scrollY;
      if (scrollY < 65) {
        setColor('gray');
      } else if (scrollY < 800) {
        setColor('none');
      } else {
        setColor('white');
      }
    };

    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (width > 810 || location.pathname) {
      setMenuOpen(false);
    }
  }, [width, key, hash, pathname]);

  return (
    <nav className={cx('navbar', color)} data-testid="navigation">
      <section className={cx('navbar-content')}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <LogoWrapper type="header" />
        </Link>

        {isMobile && (
          <>
            <menu className={cx('mobile-menu', isMenuOpen ? 'open' : '')} data-testid="mobile-menu">
              <MobileView type="header" />
            </menu>
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </>
        )}

        {!isMobile && (
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
        )}
      </section>
    </nav>
  );
};
