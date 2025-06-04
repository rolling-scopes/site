import classNames from 'classnames/bind';
import Image from 'next/image';

import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import type { AboutCourseInfo } from 'data';

import styles from './about-course-grid.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseGridProps = {
  items: AboutCourseInfo[];
};

export const AboutCourseGrid = ({ items }: AboutCourseGridProps) => {
  return (
    <div className={cx('about-course-grid')} data-testid="about-course-grid">
      {items.map(({ id, title, info, icon }) => (
        <article key={id} className={cx('grid-item')} data-testid="about-course-grid-item">
          <header className={cx('item-title')}>
            <Image
              className={cx('grid-icon')}
              src={icon}
              aria-hidden="true"
              alt=""
              data-testid="grid-icon"
            />

            <Subtitle size="extra-small">{title}</Subtitle>
          </header>
          {typeof info === 'string' ? <Paragraph>{info}</Paragraph> : info}
        </article>
      ))}
    </div>
  );
};
