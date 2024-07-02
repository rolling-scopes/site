import { AwsLogo, EpamLogo, GithubLogo, JetBrainsLogo } from '@/shared/icons';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './partnered.scss';

export const Partnered = () => (
  <div className="partnered container" data-testid="partnered">
    <div className="partnered content">
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <div className="partners">
        <EpamLogo />
        <JetBrainsLogo />
        <AwsLogo />
        <GithubLogo />
      </div>
    </div>
  </div>
);
