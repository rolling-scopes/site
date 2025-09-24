import classNames from 'classnames/bind';
import Image from 'next/image';

import { Subtitle } from '@/shared/ui/subtitle';
import { LearningPathStageItemData } from '@/widgets/learning-path-stages';

import styles from './learning-path-stage-item.module.scss';

type LearningPathStageItemProps = Omit<LearningPathStageItemData, 'id'>;

const cx = classNames.bind(styles);

export const LearningPathStageItem = ({
  title,
  content,
  image,
  imageWidth,
  imageHeight,
}: LearningPathStageItemProps) => {
  return (
    <article className={cx('learning-path-stage-item')} data-testid="learning-path-stage-item">
      <div className={cx('stage-number')}>
        <div className={cx('step')} data-testid="stage-step" />
        <div className={cx('decor-line')} />
      </div>

      <div className={cx('stage-info')}>
        <Subtitle className={cx('stage-title')}>{title}</Subtitle>
        {content}
      </div>

      {image && (
        <Image
          className={cx('stage-picture')}
          src={image}
          width={imageWidth}
          height={imageHeight}
          data-testid="stage-picture"
          alt=""
        />
      )}
    </article>
  );
};
