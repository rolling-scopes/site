import type { StageCardProps } from './stage-card.types';
import { Topics } from './topics';
import { Actions } from './actions';
import { Links } from './links';
import { LogoIcon } from './logo-icon';
import { Image } from './image';
import { Step } from './step';
import './stage-card.scss';

export const StageCard = ({
  id,
  title,
  description,
  logoIcon,
  links,
  topics,
  actions,
  imageSrc
}: StageCardProps) => {
  return (
    <div className="stage">
      <Step id={id} />
      <div className="stage-info">
        <h2 className="stage-title">{title}</h2>
        {description && <p className="stage-description">{description}</p>}
        {links && <Links links={links} />}
        {topics && <Topics topics={topics} />}
        {actions && <Actions actions={actions} marked />}
      </div>

      {logoIcon && <LogoIcon icon={logoIcon} title={title} />}
      {imageSrc && <Image imageSrc={imageSrc} title={title} />}
    </div>
  );
};
