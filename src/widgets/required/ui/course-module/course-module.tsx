import classNames from 'classnames/bind';
import { CourseModule } from '../../types';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './required.module.scss';

export const cx = classNames.bind(styles);

type CourseModuleElementProps = {
  courseModule: CourseModule;
};

export function CourseModuleElement({ courseModule }: CourseModuleElementProps) {
  const { title, description } = courseModule;

  return (
    <article className={cx('course-module-element')}>
      <Subtitle className={cx('course-module-title')} fontSize="extra-small">{title}</Subtitle>
      <List data={description} />
    </article>
  );
}
