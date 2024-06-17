import { studyOptions } from './constants';
import { OptionItem, SectionLabel } from '@/app/components';

import image from '@/assets/rs-school.webp';
import Image from '@/features/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title } from '@/shared/ui/title';

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
