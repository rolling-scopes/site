import React, { useEffect, useState } from 'react';

import { RsLogo } from '../../icons';

import './Navbar.scss';

interface NavItemProps {
  label: string;
  href: string;
  toggleMenu: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, toggleMenu }) => {
  return (
    <a className="menu-item" href={`#${href}`} onClick={toggleMenu}>
      <div className="label">{label}</div>
    </a>
  );
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');

  const listenScrollEvent = (event: any) => {
    if (window.scrollY > 50 && window.scrollY <= 800) {
      setColor('none');
    } else if (window.scrollY > 800) {
      setColor('white');
    } else {
      setColor('gray');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={`navbar ${color}`}>
      <a className="logo-container" href="#main">
        <RsLogo />
      </a>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
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
