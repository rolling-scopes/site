import classNames from 'classnames/bind';
import Image from 'next/image';

import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import type { LinkList } from '@/widgets/required/types';
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
  // moduleContent is a list of module topics, these can be either links or strings.
  const moduleContent: (string | LinkList)[] = modules.map((module) => {
    if (module.text) {
      return module.text;
    }

    if (module.links.length) {
      return module.links;
    }

    return [];
  });

  const isMarkedList = modules[0].marked ? 'marked' : 'unmarked';

  return (
    <article className={cx('stage-card')} data-testid="stage-card">
      <div className={cx('stage-number')}>
        <div className={cx('step')} data-testid="stage-step">{id}</div>
        <div className={cx('decor-line')} />
      </div>

      <div className={cx('stage-info')}>
        <Subtitle className={cx('stage-title')}>{title}</Subtitle>
        <Paragraph className={cx('stage-intro')}>{intro}</Paragraph>

        {!!moduleContent.length
          && <List className={cx('stage-list')} data={moduleContent} size="compact" type={isMarkedList} />}
      </div>

      {image.src
        && <Image className={cx('stage-picture', image.className)} src={image.src} alt={image.alt} data-testid="stage-picture" />}
    </article>
  );
};
