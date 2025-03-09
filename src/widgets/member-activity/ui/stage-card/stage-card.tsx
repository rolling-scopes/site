import { Image } from './image';
import { Links } from './links';
import { LogoIcon } from './logo-icon';
import type { StageCardProps } from './stage-card.types';
import { Step } from './step';
import { Topics } from './topics';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';

import './stage-card.scss';

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
    <div className="stage">
      <Step id={id} />
      <div className="stage-info">
        <Subtitle as="h2" weight="normal" className="stage-title">
          {title}
        </Subtitle>
        {description && <p className="stage-description">{description}</p>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {list && <List data={list} type={type} />}
      </div>

      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </div>
  );
};
