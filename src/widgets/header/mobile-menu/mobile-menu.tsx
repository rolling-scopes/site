import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { BurgerMenu } from '../ui/burger/burger';
import { Course } from '@/entities/course';
import logoBlue from '@/shared/assets/svg/rss-logo-blue.svg';
import { MobileView } from '@/widgets/mobile-view';

import styles from '../header.module.scss';

const cx = classNames.bind(styles);

type MobileMenuProps = {
  courses: Course[];
  mentorshipCourses: Course[];
  isMentorshipPage: boolean;
};

export const MobileMenu = ({ courses, mentorshipCourses, isMentorshipPage }: MobileMenuProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <menu className={cx('mobile-menu', { open: isMobileMenuOpen })} data-testid="mobile-menu">
        <MobileView
          onClose={handleMenuClose}
          courses={courses}
          mentorshipCourses={mentorshipCourses}
          type="header"
          logoIcon={isMentorshipPage ? logoBlue : undefined}
          isMenuOpen={isMobileMenuOpen}
        />
      </menu>
      <BurgerMenu isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};
