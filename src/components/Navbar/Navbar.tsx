import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks';

import { RsLogo } from '../../icons';

import './Navbar.scss';

interface NavItemProps {
  label: string;
  href: string;
  toggleMenu: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, toggleMenu }) => {
  return (
    <a
      className="menu-item"
      href={`#${href}`}
      onClick={window.innerWidth <= 810 ? toggleMenu : () => {}}>
      <div className="label">{label}</div>
    </a>
  );
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');

  const size = useWindowSize();

  const listenScrollEvent = (event: any) => {
    if (window.scrollY <= 64) {
      setColor('gray');
    } else if (window.scrollY > 64 && window.scrollY < 800) {
      setColor('none');
    } else if (window.scrollY >= 800) {
      setColor('white');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => window.scrollTo({ top: 0 });

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={`navbar ${color}`}>
      <div className="logo-container" onClick={scrollToTop}>
        <RsLogo />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo-container" onClick={scrollToTop}>
          <RsLogo />
        </div>
        <NavItem label="About" href="about" toggleMenu={toggleMenu} />
        <NavItem label="RS School" href="school" toggleMenu={toggleMenu} />
        <NavItem label="Events" href="events" toggleMenu={toggleMenu} />
        <NavItem label="Community" href="community" toggleMenu={toggleMenu} />
        <NavItem label="Merch" href="merch" toggleMenu={toggleMenu} />
      </div>
      <div className={`burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="top" />
        <div className="mid" />
        <div className="bottom" />
      </div>
    </div>
  );
};
