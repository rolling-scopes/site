import React from 'react';
import { EpamLogo, JetBrainsLogo, AwsLogo, GithubLogo } from '../../../../icons';

import './Partnered.scss';

export const Partnered: React.FC = () => (
  <div className="partnered container">
    <div className="partnered content">
      <div className="title">Partnered with</div>
      <div className="partners">
        <EpamLogo />
        <JetBrainsLogo />
        <AwsLogo />
        <GithubLogo />
      </div>
    </div>
  </div>
);
