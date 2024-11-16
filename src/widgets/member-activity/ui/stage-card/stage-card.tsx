import classNames from 'classnames/bind';
import { Image } from '../image/image';
import { Links } from '../links/links';
import { LogoIcon } from '../logo-icon/logo-icon';
import { Step } from '../step/step';
import { Topics } from '../topics/topics';
import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { StageCardProps } from '@/widgets/member-activity/types';

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
    <li className={cx('stage')}>
      <Step id={id} />
      <div className={cx('stage-info')}>
        <h2 className={cx('stage-title')}>{title}</h2>
        {description && <Paragraph className={cx('stage-description')}>{description}</Paragraph>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {list && <List data={list} type={type} />}
      </div>

      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </li>
  );
};
