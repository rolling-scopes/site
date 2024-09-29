import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './about-course-grid.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseGridProps = {
  items: {
    id: number;
    title: string;
    info: string | ReactNode;
    icon: string;
  }[];
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
              alt={`facts about the course - ${title}`}
              data-testid="grid-icon"
            />

            <Subtitle fontSize="extra-small">{title}</Subtitle>
          </header>
          { typeof info === 'string'
            ? <Paragraph>{info}</Paragraph>
            : info }
        </article>
      ))}
    </div>
  );
};
