import { Image } from './image';
import { Links } from './links';
import { LogoIcon } from './logo-icon';
import type { StageCardProps } from './stage-card.types';
import { Topics } from './topics';
import { List } from '@/shared/ui/list';

import './stage-card.scss';

export const StageCard = ({
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
    <div className="stage">
      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      <div className="stage-info">
        <h2 className="stage-title">{title}</h2>
        {description && <p className="stage-description">{description}</p>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {list && <List data={list} type={type} />}
      </div>
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </div>
  );
};
