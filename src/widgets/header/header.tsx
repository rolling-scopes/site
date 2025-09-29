'use client';

import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import { DesktopMenu } from './desktop-menu/desktop-menu';
import { MobileMenu } from './mobile-menu/mobile-menu';
import { Course } from '@/entities/course';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { Logo } from '@/shared/ui/logo';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

export type NavMenuLabel = (typeof NAV_MENU_LABELS)[keyof typeof NAV_MENU_LABELS];

type HeaderProps = {
  courses: Course[];
  mentorshipCourses: Course[];
};

export const Header = ({ courses, mentorshipCourses }: HeaderProps) => {
  const pathname = usePathname();
  const isMentorshipPage = pathname.includes(ROUTES.MENTORSHIP);
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
    sort: false,
  });

  return (
    <header className={cx('header')}>
      <nav className={cx('navbar')} data-testid="navigation">
        <section className={cx('navbar-content')}>
          <Logo logoSrc={isMentorshipPage ? logoBlue : undefined} />

          <MobileMenu
            courses={actualCourses}
            mentorshipCourses={mentorshipCourses}
            isMentorshipPage={isMentorshipPage}
          />

          <DesktopMenu
            courses={actualCourses}
            coursesWithMentorship={mentorshipCourses}
            isMentorshipPage={isMentorshipPage}
          />
        </section>
      </nav>
    </header>
  );
};
