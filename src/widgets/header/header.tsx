'use client';

import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { generateNavMenuData } from './helpers/generate-nav-menu-data';
import { BurgerMenu } from './ui/burger/burger';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { ANCHORS, NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { Logo } from '@/shared/ui/logo';
import { Paragraph } from '@/shared/ui/paragraph';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transform-courses-to-mentorship';
import { NavItem } from '@/widgets/header/ui/nav-item/nav-item';
import { MobileView } from '@/widgets/mobile-view';
import { SchoolMenu } from '@/widgets/school-menu';

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

  const menuData = useMemo(
    () => generateNavMenuData(courses, coursesWithMentorship),
    [courses, coursesWithMentorship],
  );

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
              type="header"
              logoIcon={isMentorshipPage ? logoBlue : undefined}
              isMenuOpen={isMenuOpen}
            />
          </menu>
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <menu className={cx('menu')} data-testid="desktop-menu">
            <NavItem label={NAV_MENU_LABELS.RS_SCHOOL} href={ROUTES.HOME}>
              <SchoolMenu layout="columns">
                {menuData.rsSchoolOptions.map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    title={option.title}
                    description={option.description}
                    url={option.url}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
            <NavItem label={NAV_MENU_LABELS.COURSES} href={ROUTES.COURSES}>
              <SchoolMenu layout="columns">
                {menuData.coursesOptions.map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    url={option.url}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
            <NavItem label={NAV_MENU_LABELS.COMMUNITY} href={ROUTES.COMMUNITY}>
              <SchoolMenu layout="columns">
                {menuData.communityOptions.map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    url={option.url}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
            <NavItem label={NAV_MENU_LABELS.MENTORSHIP} href={ROUTES.MENTORSHIP}>
              <SchoolMenu layout="columns">
                {menuData.mentorshipOptions.map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    url={option.url}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
            <NavItem label={NAV_MENU_LABELS.DOCS} href={ROUTES.DOCS_EN} />
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
                {menuData.donateOptions.map((option) => (
                  <SchoolMenu.Item
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    description={option.description}
                    url={option.url}
                  />
                ))}
              </SchoolMenu>
            </NavItem>
          </menu>
        </section>
      </nav>
    </header>
  );
};
