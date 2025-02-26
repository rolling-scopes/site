import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { LinkList } from '@/widgets/required';

import styles from './stage-card.module.scss';

const cx = classNames.bind(styles);

export type StageCardProps = {
  id: number;
  title: string;
  intro: string;
  modules: StageModuleProps[];
  image: {
    src: StaticImageData | null;
    alt: string;
    className: string | '';
  };
};

type StageModuleProps = {
  id: number;
  text: string;
  links: LinkList;
  marked: boolean;
};

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
        <List
          className={cx('stage-list')}
          data={listData}
          size="compact"
          type={modules[0].marked ? 'marked' : 'unmarked'}
        />
      </div>

      {image.src
      && <Image className={cx('stage-picture', image.className)} src={image.src} alt={image.alt} data-testid="stage-picture" />}
    </article>
  );
};
