import React from 'react';

import { Tag, TagColor, TagDivider, Title, TitleType } from '../../../../components';

import './Main.scss';

interface TagProps {
  id: string;
  label: string;
}

const tags: TagProps[] = [
  { id: 'education', label: 'education' },
  { id: 'events', label: 'events & meetups' },
  { id: 'community', label: 'community building' }
];

export const Main: React.FC = () => {
  return (
    <div id="main" className="main container">
      <div className="main content">
        <div className="title-container">
          <Title text="The Rolling Scopes" type={TitleType.ExtraBig} />
          <div className="subtitle">
            <div>an international community of developers</div>
            <div>since 2013</div>
          </div>
        </div>
        <div className="description">Connecting people, growing together, having fun</div>
        <div className="tags-container">
          {tags.map(({ id, label }, index) => (
            <>
              <Tag key="id" id={id} label={label} color={TagColor.Light} />
              {index !== tags?.length - 1 && <TagDivider />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
