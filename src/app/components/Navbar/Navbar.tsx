import { useEffect, useLayoutEffect, useState } from 'react';
import { useWindowSize } from '@/shared/hooks/useWindowSize/useWindowSize';
import { RsLogo } from '@/assets/icons/Rs';
import './Navbar.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';

type NavItemProps = {
  label: string;
  href: string;
  toggleMenu: () => void;
};

export const NavItem = ({ label, href, toggleMenu }: NavItemProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (window.innerWidth <= 810) {
      toggleMenu();
    }

    if (href.startsWith('#')) {
      if (window.location.pathname === '/' && window.location.hash === href) {
        event.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        navigate({ pathname: '/', hash: href });
      }
    }
  };

  return (
    <NavLink className="menu-item" to={`/${href}`} onClick={handleClick}>
      <div className="label">{label}</div>
    </NavLink>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const [color, setColor] = useState('gray');

  const listenScrollEvent = () => {
    if (window.scrollY <= 64) {
      setColor('gray');
    } else if (window.scrollY > 64 && window.scrollY < 800) {
      setColor('none');
    } else if (window.scrollY >= 800) {
      setColor('white');
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToTop = () => window.scrollTo({ top: 0 });

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  useLayoutEffect(() => {
    if (width > 810) {
      setMenuOpen(false);
    }
  }, [width]);

  return (
    <div className={`navbar ${color}`} data-testid="navigation">
      <Link className="logo-container" to="/" onClick={scrollToTop}>
        <RsLogo />
      </Link>
      <menu className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo-container" onClick={scrollToTop}>
          <RsLogo />
        </div>
        <NavItem label="About" href="#about" toggleMenu={toggleMenu} />
        <NavItem label="RS School" href="#school" toggleMenu={toggleMenu} />
        <NavItem label="Events" href="#events" toggleMenu={toggleMenu} />
        <NavItem label="Community" href="#community" toggleMenu={toggleMenu} />
        <NavItem label="Merch" href="#merch" toggleMenu={toggleMenu} />
      </menu>
      <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="top" />
        <div className="mid" />
        <div className="bottom" />
      </div>
    </div>
  );
};
