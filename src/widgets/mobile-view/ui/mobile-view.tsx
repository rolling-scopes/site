'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { DropdownArrow } from '@/shared/icons/dropdown-arrow';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';
import { renderIcon } from '@/widgets/support/ui/support';
import {
  communityMenuStaticLinks,
  donateOptions,
  mentorshipCourses,
  schoolMenuStaticLinks,
} from 'data';

import styles from './mobile-view.module.scss';

const cx = classNames.bind(styles);

type DividerProps = {
  color: 'light' | 'dark';
};

const Divider = ({ color }: DividerProps) => <hr className={cx('divider', color)} />;

type MobileViewProps = {
  type: 'header' | 'footer';
  courses: Course[];
  logoIcon?: StaticImageData;
  isMenuOpen?: boolean;
  onClose?: () => void;
};

export const MobileView = ({ type, courses, isMenuOpen, logoIcon, onClose }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  const [activeDropdowns, setActiveDropdowns] = useState<Set<string>>(new Set());

  const onMenuItemClick = (menuItem: string) => {
    setActiveDropdowns((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(menuItem)) {
        newSet.delete(menuItem);
      } else {
        newSet.add(menuItem);
      }
      return newSet;
    });
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setActiveDropdowns(new Set());
    }
  }, [isMenuOpen]);

  return (
    <nav className={cx('mobile-view')} data-testid="mobile-view">
      <Logo type={logoView} icon={logoIcon} />

      <Divider color={color} />

      <div className={cx('category-container')}>
        <button onClick={() => onMenuItemClick('RS School')} className={cx('category-link', color)}>
          <span>RS School</span>
          <span
            className={cx('dropdown-arrow', { rotate: Boolean(activeDropdowns.has('RS School')) })}
            role="button"
            aria-expanded={activeDropdowns.has('RS School')}
          >
            <DropdownArrow />
          </span>
        </button>

        <SchoolMenu mobileClass={activeDropdowns.has('RS School') ? 'visible' : 'hidden'}>
          {schoolMenuStaticLinks.map((link, i) => (
            <SchoolMenu.Item
              key={i}
              title={link.title}
              description={link.description}
              url={link.detailsUrl}
              color={color}
              onClick={onClose}
            />
          ))}
        </SchoolMenu>
      </div>

      <Divider color={color} />

      <div className={cx('category-container')}>
        <button onClick={() => onMenuItemClick('Courses')} className={cx('category-link', color)}>
          <span>Courses</span>
          <span
            className={cx('dropdown-arrow', { rotate: Boolean(activeDropdowns.has('Courses')) })}
            role="button"
            aria-expanded={activeDropdowns.has('Courses')}
          >
            <DropdownArrow />
          </span>
        </button>

        <SchoolMenu mobileClass={activeDropdowns.has('Courses') ? 'visible' : 'hidden'}>
          <SchoolMenu.Item
            key="Courses"
            title="All Courses"
            description="TBD"
            url={ROUTES.COURSES}
          />
          {courses.map((course) => (
            <SchoolMenu.Item
              key={course.id}
              icon={course.iconSmall}
              title={course.title}
              description={course.startDate}
              url={course.detailsUrl}
              color={color}
              onClick={onClose}
            />
          ))}
        </SchoolMenu>
      </div>

      <Divider color={color} />

      <div className={cx('category-container')}>
        <button onClick={() => onMenuItemClick('Community')} className={cx('category-link', color)}>
          <span>Community</span>
          <span
            className={cx('dropdown-arrow', { rotate: Boolean(activeDropdowns.has('Community')) })}
            role="button"
            aria-expanded={activeDropdowns.has('Community')}
          >
            <DropdownArrow />
          </span>
        </button>

        <SchoolMenu mobileClass={activeDropdowns.has('Community') ? 'visible' : 'hidden'}>
          {communityMenuStaticLinks.map((link, i) => (
            <SchoolMenu.Item
              key={i}
              title={link.title}
              description={link.description}
              url={link.detailsUrl}
              color={color}
              onClick={onClose}
            />
          ))}
        </SchoolMenu>
      </div>

      <Divider color={color} />

      <div className={cx('category-container')}>
        <button
          onClick={() => onMenuItemClick('Mentorship')}
          className={cx('category-link', color)}
        >
          <span>Mentorship</span>
          <span
            className={cx('dropdown-arrow', { rotate: Boolean(activeDropdowns.has('Mentorship')) })}
            role="button"
            aria-expanded={activeDropdowns.has('Mentorship')}
          >
            <DropdownArrow />
          </span>
        </button>

        <SchoolMenu mobileClass={activeDropdowns.has('Mentorship') ? 'visible' : 'hidden'}>
          <SchoolMenu.Item
            key="Mentorship"
            title="About Mentorship"
            description="TBD"
            url={ROUTES.MENTORSHIP}
          />
          {mentorshipCourses.map((course) => (
            <SchoolMenu.Item
              key={course.id}
              icon={course.iconSmall}
              title={course.title}
              url={course.detailsUrl}
              color={color}
              onClick={onClose}
            />
          ))}
        </SchoolMenu>
      </div>

      <Divider color={color} />

      <Link onClick={onClose} href={`/${ROUTES.DOCS_EN}`} className={cx('category-link', color)}>
        Docs
      </Link>

      <Divider color={color} />

      <div className={cx('category-container')}>
        <button
          onClick={() => onMenuItemClick('Support Us')}
          className={cx('category-link', color)}
        >
          <span>Support Us</span>
          <span
            className={cx('dropdown-arrow', { rotate: Boolean(activeDropdowns.has('Support Us')) })}
            role="button"
            aria-expanded={activeDropdowns.has('Support Us')}
          >
            <DropdownArrow />
          </span>
        </button>

        <SchoolMenu mobileClass={activeDropdowns.has('Support Us') ? 'visible' : 'hidden'}>
          <SchoolMenu.Item
            className="support-title"
            title="Your donations help us cover hosting, domains, licenses, and advertising for courses
                          and events. Every donation, big or small, helps!"
            url="#"
          />
          <SchoolMenu.Item className="support-title" title="Thank you for your support!" url="#" />
          {donateOptions.map((option) => (
            <SchoolMenu.Item
              key={option.id}
              icon={renderIcon(option.icon)}
              title={option.linkLabel}
              url={option.href}
            />
          ))}
        </SchoolMenu>
      </div>
    </nav>
  );
};
