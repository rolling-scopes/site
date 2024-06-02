import { studyOptions } from './constants';
import { OptionItem, Paragraph, Subtitle } from '@/app/components';

import image from '@/assets/rs-school.webp';
import Image from '@/shared/image';
import { SectionLabel } from '@/shared/section-label';
import { Title } from '@/shared/title';

import './study-with-us.scss';

export const StudyWithUs = () => (
  <div id="school" className="school container">
    <div className="school content">
      <div className="study">
        <div className="left">
          <SectionLabel label="education" />
          <Title text="Study with RS School" hasAsterisk />
          <Subtitle text="RS School is a free and community-based online education program conducted by The Rolling Scopes Community since 2013. " />
          <Paragraph>
            Want to see photos of our community? A vast collection of photographs from our events is
            available on our Facebook Albums and Instagram pages.
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
