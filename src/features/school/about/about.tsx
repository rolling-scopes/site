import { Paragraph, Subtitle } from '@/app/components';
import { Title } from '@/shared/title';

import './about.scss';

export const About = () => {
  return (
    <div className="rs-about container">
      <div className="rs-about content">
        <div className="column-2">
          <div className="info">
            <Title text="About RS School" hasAsterisk />
            <Subtitle text="No matter your age, professional employment, or place of residence." />
            <Paragraph>
              RS School offers a unique learning experience as a free, community-based online
              education initiative. The RS School has been run by the Rolling Scopes community since
              2013. Today, over 600 developer-volunteers from various countries and companies assist
              as mentors. We believe in important ideas that guide our mission.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};
