import type { ListType } from '@/shared/types';
import { Stage, StageCard } from '@/widgets/member-activity/ui/stage-card';

import './stages.scss';

export interface StagesProps {
  stages: Stage[] | null;
  type?: ListType;
}

export const Stages = ({ stages, type }: StagesProps) => {
  if (stages === null || stages.length === 0) {
    return null;
  }

  return (
    <div className="stages">
      {stages.map(({ id, title, description, logoIcon, links, topics, imageSrc, list }) => (
        <StageCard
          key={id}
          id={id}
          title={title}
          description={description}
          logoIcon={logoIcon}
          links={links}
          topics={topics}
          imageSrc={imageSrc}
          list={list}
          type={type}
        />
      ))}
    </div>
  );
};
