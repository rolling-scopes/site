import React, { useState } from 'react';
import { useWindowSize } from '../../hooks';
import './PrincipleCard.scss';

export interface PrincipleCardProps {
  title: string;
  description: string;
  Icon: React.FC;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({
  title,
  description,
  Icon
}: PrincipleCardProps) => {
  const [hovered, setHovered] = useState(false);

  const size = useWindowSize();

  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="principle-card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="accent" />
      <Icon />
      {size.width <= 810 ? (
        <>
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </>
      ) : (
        <>
          {!hovered && <div className="card-title">{title}</div>}
          {hovered && <div className="card-description">{description}</div>}
        </>
      )}

      <div className="accent-corner" />
    </div>
  );
};
