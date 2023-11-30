import React from 'react';
import { Title, PrincipleCard, PrincipleCardProps, TitleType } from '../../../../components';

import {
  OpenToEveryoneIcon,
  OpenSourcePhilosophyIcon,
  TeachItForwardIcon
} from '../../../../icons';

import './Principles.scss';

const cards: PrincipleCardProps[] = [
  {
    title: 'Open to everyone',
    description:
      'Free courses, no obligations, and no contracts. No age limit. Only students’ time and dedication are required. Students can repeatedly attend courses.',
    Icon: OpenToEveryoneIcon
  },
  {
    title: 'Open source philosophy',
    description:
      'Our Learning Management System platform and educational materials are publicly available on GitHub and YouTube.',
    Icon: OpenSourcePhilosophyIcon
  },
  {
    title: '"Teach it forward"',
    description:
      'Students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students.',
    Icon: TeachItForwardIcon
  }
];

export const Principles: React.FC = () => (
  <div className="principles container">
    <div className="principles content">
      <Title
        text="RS School Principles are  an ability to complete our mission"
        type={TitleType.Big}
        hasAsterisk={false}
        hasLines={true}
      />
      <div className="cards column-3 ">
        {cards.map((i) => (
          <PrincipleCard key={i.title} {...i} />
        ))}
      </div>
    </div>
  </div>
);
