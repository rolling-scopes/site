'use client';

import { Suspense, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { StaticImageData } from 'next/image';
import { useParams, usePathname } from 'next/navigation';

import { MobileNavItem } from './mobile-nav-item/mobile-nav-item';
import { Course } from '@/entities/course';
import iconBlue from '@/shared/assets/svg/heart-blue.svg';
import iconYellow from '@/shared/assets/svg/heart-yellow.svg';
import { NAV_MENU_LABELS, ROUTES } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';
import { CourseMenuItemsFresh } from '@/shared/ui/course-menu-items-fresh';
import { LangSwitcher } from '@/shared/ui/lang-switcher/lang-switcher';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Logo } from '@/shared/ui/logo';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import {
  COURSES_LINK_TRANSLATION_MAP,
  MENTORSHIP_LINK_TRANSLATION_MAP,
  TRANSLATION_MAP_LABELS,
} from '@/widgets/header/helpers/generate-nav-menu-data';
import { SchoolMenu } from '@/widgets/school-menu';
import {
  DONATION_DESCRIPTION_TRANSLATION_MAP,
  communityMenuStaticLinks,
  donateOptions,
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
  mentorshipCourses: Course[];
  logoIcon?: StaticImageData;
  isMenuOpen?: boolean;
  onClose?: () => void;
};

export const MobileView = ({ type, courses, mentorshipCourses, isMenuOpen, logoIcon, onClose }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';
  const courseIcon = type === 'header' ? 'iconSmall' : 'iconFooter';
  const pathname = usePathname();
  const params = useParams();

  const iconSrc = pathname.includes(ROUTES.MENTORSHIP) ? iconBlue : iconYellow;
  const lang = params?.lang as ApiResourceLocale ?? 'en-US';

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
      <div className={cx('menu-logo')}>
        <Logo type={logoView} logoSrc={logoIcon} onClick={onClose} />
        <Suspense fallback={<div />}>
          <LangSwitcher className={cx('lang-switcher')} />
        </Suspense>
      </div>

      <div className={cx('menu-content')}>
        {type === 'header' && (
          <>
            <Divider color={color} />
            <Breadcrumbs className="mobile-breadcrumbs" />
          </>
        )}

        <Divider color={color} />

        <div className={cx('category-container')}>
          <MobileNavItem
            title={NAV_MENU_LABELS.RS_SCHOOL}
            color={color}
            isDropdownActive={activeDropdowns.has(NAV_MENU_LABELS.RS_SCHOOL)}
            onMenuItemClick={() => onMenuItemClick(NAV_MENU_LABELS.RS_SCHOOL)}
          />

          <SchoolMenu isVisible={activeDropdowns.has(NAV_MENU_LABELS.RS_SCHOOL)}>
            {schoolMenuStaticLinks[lang].map((link, i) => (
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
          <MobileNavItem
            title={TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.COURSES][lang]}
            color={color}
            isDropdownActive={activeDropdowns.has(NAV_MENU_LABELS.COURSES)}
            onMenuItemClick={() => onMenuItemClick(NAV_MENU_LABELS.COURSES)}
          />

          <SchoolMenu isVisible={activeDropdowns.has(NAV_MENU_LABELS.COURSES)}>
            <SchoolMenu.Item
              key={TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.COURSES][lang]}
              title={COURSES_LINK_TRANSLATION_MAP[lang].title}
              description={COURSES_LINK_TRANSLATION_MAP[lang].description}
              url={`/${ROUTES.COURSES}`}
              color={color}
              onClick={onClose}
            />
            <CourseMenuItemsFresh
              courses={courses}
              icon={courseIcon}
              onClose={onClose}
              color={color}
              lang={lang}
            />
          </SchoolMenu>
        </div>

        <Divider color={color} />

        <div className={cx('category-container')}>
          <MobileNavItem
            title={TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.COMMUNITY][lang]}
            color={color}
            isDropdownActive={activeDropdowns.has(NAV_MENU_LABELS.COMMUNITY)}
            onMenuItemClick={() => onMenuItemClick(NAV_MENU_LABELS.COMMUNITY)}
          />

          <SchoolMenu isVisible={activeDropdowns.has(NAV_MENU_LABELS.COMMUNITY)}>
            {communityMenuStaticLinks[lang].map((link, i) => (
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
          <MobileNavItem
            title={TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.MENTORSHIP][lang]}
            color={color}
            isDropdownActive={activeDropdowns.has(NAV_MENU_LABELS.MENTORSHIP)}
            onMenuItemClick={() => onMenuItemClick(NAV_MENU_LABELS.MENTORSHIP)}
          />

          <SchoolMenu isVisible={activeDropdowns.has(NAV_MENU_LABELS.MENTORSHIP)}>
            <SchoolMenu.Item
              key={NAV_MENU_LABELS.MENTORSHIP}
              title={MENTORSHIP_LINK_TRANSLATION_MAP[lang].title}
              description={MENTORSHIP_LINK_TRANSLATION_MAP[lang].description}
              url={`/${ROUTES.MENTORSHIP}`}
              color={color}
              onClick={onClose}
            />
            {mentorshipCourses.map((course) => (
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

        <LinkCustom
          onClick={onClose}
          href={`/${ROUTES.DOCS}`}
          className={cx('category-link', color)}
        >
          {TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.DOCS][lang]}
        </LinkCustom>

        <Divider color={color} />

        <div className={cx('category-container')}>
          <MobileNavItem
            title={TRANSLATION_MAP_LABELS[NAV_MENU_LABELS.SUPPORT_US][lang]}
            icon={iconSrc}
            color={color}
            isDropdownActive={activeDropdowns.has(NAV_MENU_LABELS.SUPPORT_US)}
            onMenuItemClick={() => onMenuItemClick(NAV_MENU_LABELS.SUPPORT_US)}
          />

          <SchoolMenu isVisible={activeDropdowns.has(NAV_MENU_LABELS.SUPPORT_US)}>
            <SchoolMenu.Item
              className="support-title"
              title={DONATION_DESCRIPTION_TRANSLATION_MAP[lang]}
              url="#"
              color={color}
            />
            {donateOptions[lang].toReversed().map((option) => (
              <SchoolMenu.Item
                key={option.id}
                icon={option.icon}
                title={option.menuLinkLabel}
                url={option.href}
                color={color}
                onClick={onClose}
              />
            ))}
          </SchoolMenu>
        </div>
      </div>
    </nav>
  );
};
