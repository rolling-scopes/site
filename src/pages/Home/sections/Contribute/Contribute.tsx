import React from 'react';

import { Title, Paragraph, Subtitle, OptionItem } from '../../../../components';

import image from '../../../../assets/contribute.png';

import './Contribute.scss';

interface ContributeOptionsProps {
  title: string;
  description: string;
  buttonLabel: string;
}

const contributeOptions: ContributeOptionsProps[] = [
  {
    title: 'Mentorship',
    description:
      'Become a mentor and guide the next generation of developers. Sign up as a mentor here.',
    buttonLabel: 'Go to RS School'
  },
  {
    title: 'Developer / Coordinator / Trainer',
    description:
      'Contribute your skills as a developer, coordinator, or trainer. Fill out this form to get started.',
    buttonLabel: 'Become a contributor'
  }
];

export const Contribute: React.FC = () => (
  <div className="contribute container">
    <div className="contribute content">
      <div className="general">
        <div className="info">
          <Title text="How to Contribute" hasAsterix />
          <Subtitle text="Contributing to The Rolling Scopes is not only a great way to give back to the community, but it’s also an excellent way to enhance your own knowledge." />
          <Paragraph>
            Remember, teaching others is one of the best ways to learn – this is known as The
            Protégé Effect! There are several ways you can contribute, choose yours.
          </Paragraph>
        </div>
        <img className="right picture" src={image} alt="contribute" />
      </div>
      <div className="contribute-options">
        {contributeOptions.map((i) => (
          <OptionItem {...i} key={i.title} />
        ))}
      </div>
      <Paragraph>
        Additionally, we provide feedback on LinkedIn, which can be a valuable asset for your
        professional development.s.
      </Paragraph>
    </div>
  </div>
);
