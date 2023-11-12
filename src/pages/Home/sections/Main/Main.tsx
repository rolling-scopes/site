import React from 'react';

import { Tag, TagDivider, Title, TitleType } from '../../../../components';

import './Main.scss';

interface TagProps {
  id: string;
  label: string;
}

const tags: TagProps[] = [
  { id: 'school', label: 'education' },
  { id: 'events', label: 'events & meetups' },
  { id: 'community', label: 'community building' }
];

const TitleIcon = () => (
  <svg viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M45.3334 14.7339L45.7597 29.3798C46.0062 37.8513 52.8159 44.6609 61.2874 44.9075L75.9333 45.3338L61.2874 45.7601C52.8159 46.0067 46.0062 52.8164 45.7597 61.2879L45.3334 75.9338L44.907 61.2878C44.6605 52.8164 37.8508 46.0067 29.3793 45.7601L14.7334 45.3338L29.3794 44.9075C37.8508 44.6609 44.6605 37.8513 44.907 29.3798L45.3334 14.7339Z"
      fill="#D44333"
    />
    <rect y="44.7666" width="90.6665" height="1.13333" fill="#D44333" />
    <rect
      x="44.7666"
      y="90.6665"
      width="90.6665"
      height="1.13333"
      transform="rotate(-90 44.7666 90.6665)"
      fill="#D44333"
    />
  </svg>
);
export const Main: React.FC = () => {
  return (
    <div id="main" className="main container">
      <div className="main content">
        <div className="title-with-icon-container">
          <div className="title-container">
            <Title text="The Rolling Scopes" type={TitleType.ExtraBig} />
            <div className="subtitle">
              <div>an international community of developers</div>
              <div>since 2013</div>
            </div>
          </div>
          <div className="title-icon">
            <TitleIcon />
          </div>
        </div>
        <div className="description">Connecting people, growing together, having fun</div>
        <div className="tags-container">
          {tags.map(({ id, label }, index) => (
            <div className="tag-container" key={id}>
              <Tag id={id} label={label} />
              {index !== tags?.length - 1 && <TagDivider />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
