'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';
import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { Logo } from '@/shared/ui/logo';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

type HeaderProps = {
  courses: Course[];
};

const navLinks = [
  {
    label: 'RS School',
    href: ROUTES.HOME,
    heading: 'rs school',
    hasSubmenu: true,
  },
  {
    label: 'Courses',
    href: `/${ROUTES.COURSES}`,
    heading: 'all courses',
    hasSubmenu: true,
  },
  {
    label: 'Community',
    href: `/${ROUTES.COMMUNITY}`,
    heading: 'community',
    hasSubmenu: true,
  },
  {
    label: 'Mentorship',
    href: `/${ROUTES.MENTORSHIP}`,
    heading: 'mentorship',
    hasSubmenu: true,
  },
  {
    label: 'Docs',
    href: `/${ROUTES.DOCS}`,
    heading: 'docs',
    hasSubmenu: false,
  },
] as const;

export const Header = ({ courses }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');
  const [hash, setHash] = useState('');
  const [key, setKey] = useState('');
  const pathname = usePathname();

  let headerAccentColor = 'gray';

  if (pathname) {
    headerAccentColor = pathname.includes(ROUTES.MENTORSHIP) ? 'blue' : 'gray';
  }

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
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
      setKey(window.location.href);
    }
  }, [pathname]);

  useEffect(() => {
    if (location.pathname) {
      setMenuOpen(false);
      setColor(headerAccentColor);
    }
  }, [key, hash, pathname, headerAccentColor]);

  return (
    <nav className={cx('navbar', color)} data-testid="navigation">
      <section className={cx('navbar-content')}>
        <Logo />

        <menu className={cx('mobile-menu', { open: isMenuOpen })} data-testid="mobile-menu">
          <MobileView courses={courses} type="header" />
        </menu>
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <menu className={cx('menu')}>
          {navLinks.map((link) => {
            return (
              <NavItem
                key={link.label}
                label={link.label}
                href={link.href}
                dropdownInner={link.hasSubmenu
                  ? (
                      <SchoolMenu
                        courses={courses}
                        heading={link.heading}
                        color="dark"
                        hasTitle={false}
                      />
                    )
                  : null}
              />
            );
          })}
        </menu>
      </section>
    </nav>
  );
};
