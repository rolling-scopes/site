import { StageCard, type Stage } from '../stage-card';
import './stages.scss';

export interface StagesProps {
  stages: Stage[] | null;
}

export const Stages = ({ stages }: StagesProps) => {
  if (stages === null || stages.length === 0) return null;

  return (
    <div className="stages">
      {stages.map(({ id, title, description, logoIcon, links, topics, imageSrc, actions }) => (
        <StageCard
          key={id}
          id={id}
          title={title}
          description={description}
          logoIcon={logoIcon}
          links={links}
          topics={topics}
          imageSrc={imageSrc}
          actions={actions}
        />
      ))}
    </div>
  );
};
