import React from 'react';

import './Main.css';

export const Main: React.FC = () => {
  return (
    <div className="rectangle">
      <div>
        <h1 className="the-rolling-scopes">The Rolling Scopes</h1>
        <span className="_">*</span>
      </div>

      <div>
        <span>an international community of developers</span>
        <span>since 2013</span>
      </div>

      <div className="connecting-people-growing-together-having-fun">
        Connecting people, growing together, having fun
      </div>
      <div>
        <div className="tag">
          <span className="label">education</span>
        </div>
        <div className="asterix">
          <span className="asterix_label">*</span>
        </div>
        <div className="tag">
          <span className="label">events & meetups</span>
        </div>
        <div className="asterix">
          <span className="asterix_label">*</span>
        </div>
        <div className="tag">
          <span className="label">community building</span>
        </div>
      </div>
    </div>
  );
};
