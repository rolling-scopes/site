import React from 'react';

import './MentorCard.scss';

export interface MentorCardProps {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
}

export const MentorCard = ({ imageSrc, name, position, description }: MentorCardProps) => {
  return (
    <div className="mentorCardWrapper">
      <div className="mentorCardImage">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="mentorCardText">
        <div className="mentorCardTitle">
          <h2 className="mentorCardTitleName">{name}</h2>
          <h3 className="mentorCardTitlePosition">{position}</h3>
        </div>
        <p className="mentorCardTextDescription">{description}</p>
      </div>
    </div>
  );
};
