import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { LogoWrapper, MobileView } from '@/app/components';
import { useWindowSize } from '@/app/hooks';

import styles from './header.module.scss';

const navLinks = [
  { label: 'RS School', href: '/#main' },
  { label: 'Courses', href: '/courses/#main' },
  { label: 'Community', href: '/community/#main' },
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
    <nav className={`${styles.navbar} ${styles[color]}`} data-testid="navigation">
      <section className={styles.navbarContent}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <LogoWrapper type="header" />
        </Link>

        {isMobile && (
          <menu
            className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
            data-testid="mobile-menu">
            <MobileView type="header" />
          </menu>
        )}

        {!isMobile && (
          <menu className={styles.menu}>
            {navLinks.map((link) => {
              const isDropdown = false;
              // const isDropdown = link.label === 'RS School';

              return (
                <NavItem
                  key={link.label}
                  label={link.label}
                  href={isDropdown ? undefined : link.href}
                  dropdown={isDropdown}
                />
              );
            })}
          </menu>
        )}

        {isMobile && <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
      </section>
    </nav>
  );
};
