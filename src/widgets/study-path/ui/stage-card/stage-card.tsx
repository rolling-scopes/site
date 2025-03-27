import classNames from 'classnames/bind';
import Image from 'next/image';

import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import type { StageCardProps } from 'data';

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
        <div className={cx('step')} data-testid="stage-step">{id}</div>
        <div className={cx('decor-line')} />
      </div>

      <div className={cx('stage-info')}>
        <Subtitle className={cx('stage-title')}>{title}</Subtitle>
        <Paragraph className={cx('stage-intro')}>{intro}</Paragraph>
        {listData.length
          && <List
            className={cx('stage-list')}
            data={listData}
            size="compact"
            type={modules[0].marked ? 'marked' : 'unmarked'}
          // eslint-disable-next-line @stylistic/jsx-closing-bracket-location
          />}
      </div>

      {image.src
        && <Image className={cx('stage-picture', image.className)} src={image.src} alt={image.alt} data-testid="stage-picture" />}
    </article>
  );
};
