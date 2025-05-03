'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { BurgerMenu } from './burger/burger';
import { NavItem } from './nav-item/nav-item';
import { donateOptionsForNavMenu } from '../../../../../dev-data/donate-options.data';
import { ANCHORS, NAV_MENU_LABELS, ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { Logo } from '@/shared/ui/logo';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transformCoursesToMentorship';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';
import { communityMenuStaticLinks, schoolMenuStaticLinks } from 'data';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

type HeaderProps = {
  courses: Course[];
};

export const Header = ({ courses }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);
  const iconSrc = isMentorshipPage ? iconBlue : iconYellow;
  const coursesWithMentorship = transformCoursesToMentorship(courses);

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
          <NavItem label={NAV_MENU_LABELS.RS_SCHOOL} href={ROUTES.HOME}>
            <SchoolMenu layout="columns" anchorLinks={true}>
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
          <NavItem label={NAV_MENU_LABELS.COURSES} href={ROUTES.COURSES}>
            <SchoolMenu>
              <SchoolMenu.Item
                key={NAV_MENU_LABELS.COURSES}
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
          <NavItem label={NAV_MENU_LABELS.COMMUNITY} href={ROUTES.COMMUNITY}>
            <SchoolMenu layout="columns" anchorLinks={true}>
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
          <NavItem label={NAV_MENU_LABELS.MENTORSHIP} href={ROUTES.MENTORSHIP}>
            <SchoolMenu>
              <SchoolMenu.Item
                key={NAV_MENU_LABELS.MENTORSHIP}
                title="About Mentorship"
                description="Some text"
                url={`/${ROUTES.MENTORSHIP}`}
              />
            </SchoolMenu>
            <SchoolMenu layout="columns">
              {coursesWithMentorship.map((course) => (
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
          <NavItem label={NAV_MENU_LABELS.DOCS} href={ROUTES.DOCS_EN} />
          <NavItem label={NAV_MENU_LABELS.SUPPORT_US} href={`#${ANCHORS.DONATE}`} icon={iconSrc}>
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
