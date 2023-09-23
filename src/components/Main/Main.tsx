import React from 'react';

import './Main.scss';

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <div className="tag">
    <span className="label">{label}</span>
  </div>
);

const TagDevider: React.FC = () => (
  <div className="asterix">
    <span className="label">*</span>
  </div>
);

export const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="title-container">
        <div className="title">The Rolling Scopes</div>

        <div className="title-description">
          <div>an international community of developers</div>
          <div>since 2013</div>
        </div>
      </div>

      <div className="description">Connecting people, growing together, having fun</div>
      <div className="tags-container">
        <Tag label="education" />
        <TagDevider />
        <Tag label="events & meetups" />
        <TagDevider />
        <Tag label="community building" />
      </div>
    </div>
  );
};
