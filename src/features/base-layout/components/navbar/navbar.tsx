import { useEffect, useState } from 'react';
import { useWindowSize } from '@/app/hooks/use-window-size/use-window-size';
import { LogoWrapper } from '@/app/components';
import { NavItem } from './nav-item/nav-item';
import { MobileView } from '@/app/components';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from './burger';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'RS School', href: '/#school' },
  { label: 'Events', href: '/#events' },
  { label: 'Community', href: '/#community' },
  { label: 'Merch', href: '/#merch' }
];

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');
  const { key, hash, pathname } = useLocation();
  const { width } = useWindowSize();
  const isMobile = isMenuOpen && width <= 810;

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
    <div className={`navbar ${color}`} data-testid="navigation">
      <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
        <LogoWrapper />
      </Link>
      {isMobile ? (
        <menu className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} data-testid="menu">
          <MobileView type="navbar" />
        </menu>
      ) : (
        <menu className="menu">
          {navLinks.map((link) => (
            <NavItem key={link.label} label={link.label} href={link.href} />
          ))}
        </menu>
      )}

      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};
