/* eslint-disable @stylistic/multiline-ternary */

import classNames from 'classnames/bind';

import { FeatureGridData } from '@/widgets/feature-grid';
import { FeatureItem } from '@/widgets/feature-grid/ui/feature-item/feature-item';
import {
  FeatureItemMentorship,
} from '@/widgets/feature-grid/ui/feature-item-mentorship/feature-item-mentorship';

import styles from './feature-grid.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseSectionProps = FeatureGridData;

export const FeatureGrid = async ({
  gridItems,
}: AboutCourseSectionProps) => {
  return (
    <div className={cx('about-course-grid')} data-testid="about-course-grid">
      {gridItems.map(({ id, heading, content, icon, variant }) =>
        variant === 'base' ? (
          <FeatureItem key={id} heading={heading} content={content} icon={icon} />
        ) : (
          <FeatureItemMentorship key={id} title={heading} description={content} icon={icon} />
        ),
      )}
    </div>
  );
};
