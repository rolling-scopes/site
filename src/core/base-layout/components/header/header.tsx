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
import { communityMenuStaticLinks, mentorshipCourses, schoolMenuStaticLinks } from 'data';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

type HeaderProps = {
  courses: Course[];
};

export const Header = ({ courses }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState('gray');
  const pathname = usePathname();

  // const headerAccentColor = pathname.includes(ROUTES.MENTORSHIP) ? 'blue' : 'gray';
  let headerAccentColor = 'gray';

  if (pathname) {
    headerAccentColor = pathname.includes(ROUTES.MENTORSHIP) ? 'blue' : 'gray';
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
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
    setColor(headerAccentColor);
  }, [pathname, headerAccentColor]);

  return (
    <nav className={cx('navbar', color)} data-testid="navigation">
      <section className={cx('navbar-content')}>
        <Logo />

        <menu className={cx('mobile-menu', { open: isMenuOpen })} data-testid="mobile-menu">
          <MobileView onClose={handleMenuClose} courses={courses} type="header" />
        </menu>
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <menu className={cx('menu')}>
          <NavItem label="RS School" href={ROUTES.HOME}>
            <SchoolMenu>
              {schoolMenuStaticLinks.map((link, i) => (
                <SchoolMenu.Item
                  key={i}
                  title={link.title}
                  description={link.description}
                  url={link.detailsUrl}
                />
              ))}
            </SchoolMenu>
          </NavItem>
          <NavItem label="Courses" href={ROUTES.COURSES}>
            <SchoolMenu>
              {courses.map((course) => (
                <SchoolMenu.Item
                  key={course.id}
                  icon={course.iconSmall}
                  title={course.title}
                  description={course.startDate}
                  url={course.detailsUrl}
                />
              ))}
            </SchoolMenu>
          </NavItem>
          <NavItem label="Community" href={ROUTES.COMMUNITY}>
            <SchoolMenu>
              {communityMenuStaticLinks.map((link, i) => (
                <SchoolMenu.Item
                  key={i}
                  title={link.title}
                  description={link.description}
                  url={link.detailsUrl}
                />
              ))}
            </SchoolMenu>
          </NavItem>
          <NavItem label="Mentorship" href={ROUTES.MENTORSHIP}>
            <SchoolMenu>
              {mentorshipCourses.map((course) => (
                <SchoolMenu.Item
                  key={course.id}
                  icon={course.iconSmall}
                  title={course.title}
                  url={course.detailsUrl}
                />
              ))}
            </SchoolMenu>
          </NavItem>
        </menu>
      </section>
    </nav>
  );
};
