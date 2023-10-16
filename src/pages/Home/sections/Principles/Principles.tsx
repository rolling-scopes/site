import React from 'react';
import { Title, PrincipleCard, PrincipleCardProps } from '../../../../components';

import {
  OpenToEveryoneIcon,
  OpenSourcePhilosophyIcon,
  TeachItForwardIcon
} from '../../../../icons';

import './Principles.scss';

const cards: PrincipleCardProps[] = [
  { text: 'Open to everyone', Icon: OpenToEveryoneIcon },
  { text: 'Open source philosophy', Icon: OpenSourcePhilosophyIcon },
  { text: 'Pay the favor forward', Icon: TeachItForwardIcon }
];

export const Principles: React.FC = () => (
  <div className="principles container">
    <div className="principles content">
      <Title
        text="RS School Principles are  an ability to complete our mission"
        hasAsterix={false}
        hasLines={true}
      />
      <div className="cards column-3 ">
        {cards.map((i) => (
          <PrincipleCard key={i.text} {...i} />
        ))}
      </div>
    </div>
  </div>
);
