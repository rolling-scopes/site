import { EpamLogo, JetBrainsLogo, AwsLogo, GithubLogo } from '@/shared/icons';

import './Partnered.scss';

export const Partnered = () => (
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
