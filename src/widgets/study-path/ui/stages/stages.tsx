import { type Stage, StageCard } from '../stage-card';

import './stages.scss';

export interface StagesProps {
  stages: Stage[] | null;
  marked?: boolean;
}

export const Stages = ({ stages, marked }: StagesProps) => {
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
          marked={marked}
        />
      ))}
    </div>
  );
};
