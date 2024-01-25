import { Title, PrincipleCard, type PrincipleCardProps, TitleType } from '@/shared/components';

import { OpenToEveryoneIcon, OpenSourcePhilosophyIcon, TeachItForwardIcon } from '@/shared/icons';

import './Principles.scss';

export const cards: PrincipleCardProps[] = [
  {
    title: 'Open to everyone',
    description:
      'Free courses, no obligations, and no contracts. No age limit. Only students’ time and dedication are required. Students can repeatedly attend courses.',
    icon: <OpenToEveryoneIcon />
  },
  {
    title: 'Open source philosophy',
    description:
      'Our Learning Management System platform and educational materials are publicly available on GitHub and YouTube.',
    icon: <OpenSourcePhilosophyIcon />
  },
  {
    title: '"Teach it forward"',
    description:
      'Students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students.',
    icon: <TeachItForwardIcon />
  }
];

export const Principles = () => (
  <div className="principles container">
    <div className="principles content">
      <Title
        text="RS School Principles are an ability to complete our mission"
        type={TitleType.Big}
        hasAsterisk={false}
        hasLines={true}
      />
      <div className="cards column-3 ">
        {cards.map(({ title, description, icon }) => (
          <PrincipleCard key={title} description={description} icon={icon} title={title} />
        ))}
      </div>
    </div>
  </div>
);
