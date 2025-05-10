import { AwsLogo, GithubLogo, JetBrainsLogo } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './partnered.scss';

export const Partnered = () => (
  <div className="partnered container" data-testid="partnered">
    <div className="partnered content">
      <WidgetTitle size="small">Partnered with</WidgetTitle>
      <div className="partners">
        <div className="partner-logo-container">
          <LinkCustom
            href="https://www.jetbrains.com"
            external
            icon={null}
          >
            <JetBrainsLogo />
          </LinkCustom>
        </div>
        <div className="partner-logo-container">
          <LinkCustom
            href="https://aws.amazon.com/"
            external
            icon={null}
          >
            <AwsLogo />
          </LinkCustom>
        </div>
        <div className="partner-logo-container">
          <LinkCustom
            href="https://github.com/"
            external
            icon={null}
          >
            <GithubLogo />
          </LinkCustom>
        </div>
      </div>
    </div>
  </div>
);
