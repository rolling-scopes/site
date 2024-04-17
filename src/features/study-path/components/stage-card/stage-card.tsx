import { Actions } from './actions';
import { Image } from './image';
import { Links } from './links';
import { LogoIcon } from './logo-icon';
import type { StageCardProps } from './stage-card.types';
import { Step } from './step';
import { Topics } from './topics';

import './stage-card.scss';

export const StageCard = ({
  id,
  title,
  description,
  logoIcon,
  links,
  topics,
  actions,
  imageSrc,
  marked,
}: StageCardProps) => {
  return (
    <div className="stage">
      <Step id={id} />
      <div className="stage-info">
        <h2 className="stage-title">{title}</h2>
        {description && <p className="stage-description">{description}</p>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {actions && <Actions actions={actions} marked={marked} />}
      </div>

      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </div>
  );
};
