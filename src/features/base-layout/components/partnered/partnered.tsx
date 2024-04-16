import { AwsLogo, EpamLogo, GithubLogo, JetBrainsLogo } from '@/icons';

import './partnered.scss';

export const Partnered = () => (
  <div className="partnered container" data-testid="partnered">
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
