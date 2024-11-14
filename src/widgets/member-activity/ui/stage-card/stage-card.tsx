import classNames from 'classnames/bind';
import type { StageCardProps } from './stage-card.types';
import { Image } from '../image';
import { Links } from '../links';
import { LogoIcon } from '../logo-icon';
import { Step } from '../step';
import { Topics } from '../topics';
import { List } from '@/shared/ui/list';

import styles from './stage-card.module.scss';

const cx = classNames.bind(styles);

export const StageCard = ({
  id,
  title,
  description,
  logoIcon,
  links,
  topics,
  imageSrc,
  list,
  type,
}: StageCardProps) => {
  return (
    <div className={cx('stage')}>
      <Step id={id} />
      <div className={cx('stage-info')}>
        <h2 className={cx('stage-title')}>{title}</h2>
        {description && <p className={cx('stage-description')}>{description}</p>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {list && <List data={list} type={type} />}
      </div>

      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </div>
  );
};
