import { studyOptions } from '../constants';
import image from '@/shared/assets/rs-school.webp';
import Image from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { OptionItem } from '@/widgets/option-item';

import './study-with-us.scss';

export const StudyWithUs = () => (
  <div id="school" className="school container">
    <div className="school content">
      <div className="study">
        <div className="left">
          <SectionLabel label="education" />
          <WidgetTitle marginSize="medium" size="medium" mods="asterisk">
            Study with RS School
          </WidgetTitle>
          <Subtitle marginSize="medium">
            RS School is a free and community-based online education program conducted by The
            Rolling Scopes Community since 2013.
          </Subtitle>
          <Paragraph>
            Currently 500+ developers from different countries and companies involve in the
            education process as mentors.
          </Paragraph>
        </div>
        <Image className="right picture" src={image} alt="education" />
      </div>
      <div className="study-options column-3 ">
        {studyOptions.map((i) => (
          <OptionItem {...i} key={i.title} />
        ))}
      </div>
    </div>
  </div>
);
