import classNames from 'classnames/bind';
import Image from 'next/image';

import type { LearningPathStageItem as TLearningPathStageItem } from '@/entities/course/types';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './learning-path-stage-item.module.scss';

type LearningPathStagesProps = Omit<TLearningPathStageItem, 'id'> & {
  index: number;
};

const cx = classNames.bind(styles);

export const LearningPathStageItem = ({
  title,
  content,
  image,
  index,
}: LearningPathStagesProps) => {
  const step = index + 1;

  return (
    <article className={cx('learning-path-stage-item')} data-testid="learning-path-stage-item">
      <div className={cx('stage-number')}>
        <div className={cx('step')} data-testid="stage-step">
          {step}
        </div>
        <div className={cx('decor-line')} />
      </div>

      <div className={cx('stage-info')}>
        <Subtitle className={cx('stage-title')}>{title}</Subtitle>
        {content}
      </div>

      {image && (
        <Image className={cx('stage-picture')} src={image} data-testid="stage-picture" alt="" />
      )}
    </article>
  );
};
