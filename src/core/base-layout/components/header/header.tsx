'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { donateOptionsForNavMenu } from '../../../../../dev-data/donate-options.data';
import { ANCHORS, ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
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

  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={cx('navbar', 'white')} data-testid="navigation">
      <section className={cx('navbar-content')}>
        <Logo icon={isMentorshipPage ? logoBlue : undefined} />

        <menu className={cx('mobile-menu', { open: isMenuOpen })} data-testid="mobile-menu">
          <MobileView
            onClose={handleMenuClose}
            courses={courses}
            type="header"
            logoIcon={isMentorshipPage ? logoBlue : undefined}
            isMenuOpen={isMenuOpen}
          />
        </menu>
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <menu className={cx('menu')} data-testid="desktop-menu">
          <NavItem label="RS School" href={ROUTES.HOME}>
            <SchoolMenu layout="columns" staticLinks={true}>
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
              <SchoolMenu.Item
                key="Courses"
                title="All Courses"
                description="TBD"
                url={`/${ROUTES.COURSES}`}
              />
            </SchoolMenu>
            <SchoolMenu layout="columns">
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
            <SchoolMenu layout="columns" staticLinks={true}>
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
              <SchoolMenu.Item
                key="Mentorship"
                title="About Mentorship"
                description="TBD"
                url={`/${ROUTES.MENTORSHIP}`}
              />
            </SchoolMenu>
            <SchoolMenu layout="columns">
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
          <NavItem label="Docs" href={ROUTES.DOCS_EN} />
          <NavItem label="Support Us" href={`#${ANCHORS.DONATE}`}>
            <ul className={cx('support-text')}>
              <SchoolMenu.Item
                title="Your donations help us cover hosting, domains, licenses, and advertising for courses
                and events. Every donation, big or small, helps!"
                url="#"
              />
              <SchoolMenu.Item title="Thank you for your support!" url="#" />
            </ul>
            <SchoolMenu>
              {donateOptionsForNavMenu.map((option) => (
                <SchoolMenu.Item
                  key={option.id}
                  icon={option.icon}
                  title={option.linkLabel}
                  url={option.href}
                />
              ))}
            </SchoolMenu>
          </NavItem>
        </menu>
      </section>
    </nav>
  );
};
