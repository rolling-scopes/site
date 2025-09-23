'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { BurgerMenu } from './ui/burger/burger';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { ANCHORS, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { CourseMenuItemsFresh } from '@/shared/ui/course-menu-items-fresh';
import { LangSwitcher } from '@/shared/ui/lang-switcher/lang-switcher';
import { Logo } from '@/shared/ui/logo';
import { Paragraph } from '@/shared/ui/paragraph';
import { NavItem } from '@/widgets/header/ui/nav-item/nav-item';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';
import { communityMenuStaticLinks, donateOptions, schoolMenuStaticLinks } from 'data';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

type HeaderProps = {
  courses: Course[];
  mentorshipCourses: Course[];
};

export const Header = ({ courses, mentorshipCourses }: HeaderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);
  const iconSrc = isMentorshipPage ? iconBlue : iconYellow;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={cx('header')}>
      <nav className={cx('navbar')} data-testid="navigation">
        <section className={cx('navbar-content')}>
          <Logo logoSrc={isMentorshipPage ? logoBlue : undefined} />

          <menu className={cx('mobile-menu', { open: isMenuOpen })} data-testid="mobile-menu">
            <MobileView
              onClose={handleMenuClose}
              courses={courses}
              mentorshipCourses={mentorshipCourses}
              type="header"
              logoIcon={isMentorshipPage ? logoBlue : undefined}
              isMenuOpen={isMenuOpen}
            />
          </menu>
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <menu className={cx('menu')} data-testid="desktop-menu">
            <NavItem label={NAV_MENU_LABELS.RS_SCHOOL} href={ROUTES.HOME}>
              <SchoolMenu layout="columns">
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
                  description="Journey to full stack mastery"
                  url={`/${ROUTES.COURSES}`}
                />
              </SchoolMenu>
              <SchoolMenu layout="columns">
                <CourseMenuItemsFresh courses={courses} />
              </SchoolMenu>
            </NavItem>
            <NavItem label={NAV_MENU_LABELS.COMMUNITY} href={ROUTES.COMMUNITY}>
              <SchoolMenu layout="columns">
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
                  description="By teaching others, you learn yourself"
                  url={`/${ROUTES.MENTORSHIP}`}
                />
              </SchoolMenu>
              <SchoolMenu layout="columns">
                {mentorshipCourses.map((course) => (
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
            <NavItem label={NAV_MENU_LABELS.DOCS} href={ROUTES.DOCS} />
            <NavItem
              reverseLayout={true}
              label={NAV_MENU_LABELS.SUPPORT_US}
              href={`#${ANCHORS.DONATE}`}
              icon={iconSrc}
            >
              <div className={cx('support-text')}>
                <Paragraph fontSize="small">
                  Your donations help us cover hosting, domains, licenses, and advertising for
                  courses and events. Every donation, big or small, helps!
                </Paragraph>
                <Paragraph fontSize="small">Thank you for your support!</Paragraph>
              </div>
              <SchoolMenu>
                {donateOptions.toReversed().map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    icon={option.icon}
                    title={option.menuLinkLabel}
                    url={option.href}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
          </menu>

          <LangSwitcher />
        </section>
      </nav>
    </header>
  );
};
