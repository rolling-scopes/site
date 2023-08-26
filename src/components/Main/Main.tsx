import React from 'react';

import './Main.css';

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
        <div className="tag">
          <span className="label">education</span>
        </div>
        <div className="asterix">
          <span className="label">*</span>
        </div>
        <div className="tag">
          <span className="label">events & meetups</span>
        </div>
        <div className="asterix">
          <span className="label">*</span>
        </div>
        <div className="tag">
          <span className="label">community building</span>
        </div>
      </div>
    </div>
  );
};
