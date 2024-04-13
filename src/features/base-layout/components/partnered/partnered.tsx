import { EpamLogo, JetBrainsLogo, AwsLogo, GithubLogo } from '@/icons';

import './partnered.scss';

export const Partnered = () => (
  <article className="partnered container" data-testid="partnered">
    <div className="partnered content">
      <div className="title">Partnered with</div>
      <div className="partners">
        <EpamLogo />
        <JetBrainsLogo />
        <AwsLogo />
        <GithubLogo />
      </div>
    </div>
  </article>
);
