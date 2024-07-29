import { AwsLogo, EpamLogo, GithubLogo, JetBrainsLogo } from '@/shared/icons';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './partnered.scss';

export const Partnered = () => (
  <div className="partnered container" data-testid="partnered">
    <div className="partnered content">
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <div className="partners">
        <figure className="partner-logo-container">
          <EpamLogo />
        </figure>
        <figure className="partner-logo-container">
          <JetBrainsLogo />
        </figure>
        <figure className="partner-logo-container">
          <AwsLogo />
        </figure>
        <figure className="partner-logo-container">
          <GithubLogo />
        </figure>
      </div>
    </div>
  </div>
);
