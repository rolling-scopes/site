import { studyOptions } from '../constants';
import image from '@/shared/assets/rs-school.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './study-with-us.scss';

export const StudyWithUs = () => (
  <section id="school" className="school container">
    <div className="school content">
      <article className="study">
        <div className="left">
          <SectionLabel>education</SectionLabel>
          <WidgetTitle mods="asterisk">Study with RS School</WidgetTitle>
          <Paragraph fontSize="large">
            RS School is a free and community-based online education program conducted by The
            Rolling Scopes Community since 2013.
          </Paragraph>
          <Paragraph>
            Currently 500+ developers from different countries and companies involve in the
            education process as mentors.
          </Paragraph>
        </div>
        <Image className="right picture" src={image} alt="education" />
      </article>
      <div className="study-options column-3 ">
        {studyOptions.map((i) => (
          <article key={i.title} className="option-item" data-testid="option-item">
            <Subtitle>{i.title}</Subtitle>
            <Paragraph fontSize="large">{i.description}</Paragraph>
          </article>
        ))}
      </div>
    </div>
  </section>
);
