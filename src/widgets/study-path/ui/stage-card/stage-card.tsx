import classNames from 'classnames/bind';
import Image from 'next/image';

import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import type { StageCardProps } from '@/widgets/study-path/types';

import styles from './stage-card.module.scss';

const cx = classNames.bind(styles);

export const StageCard = ({
  id,
  title,
  intro,
  modules,
  image,
}: StageCardProps) => {
  const listData = modules.map((module) => {
    if (module.text) {
      return module.text;
    } else if (module.links.length) {
      return module.links;
    }
    return [];
  });

  return (
    <article className={cx('stage-card')} data-testid="stage-card">
      <div className={cx('stage-number')}>
        <div className={cx('step')}>{id}</div>
        <div className={cx('decor-line')} />
      </div>

      <div className={cx('stage-info')}>
        <Subtitle className={cx('stage-title')}>{title}</Subtitle>
        <Paragraph className={cx('stage-intro')}>{intro}</Paragraph>
        <List
          className={cx('stage-links')}
          data={listData}
          size="compact"
          type={modules[0].marked ? 'marked' : 'unmarked'}
        />
      </div>

      {image.src && <Image className={cx('stage-logo')} src={image.src} alt={image.alt} />}
    </article>
  );
};
