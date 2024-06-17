import { Title, TitleType } from '@/app/components';

import image from '@/assets/speakers-wanted.webp';
import Image from '@/features/image';
import { EmailIcon } from '@/icons';
import { Subtitle } from '@/shared/ui/subtitle';

import './speakers.scss';

export const Speakers = () => (
  <div className="speakers container">
    <div className="speakers content">
      <div className="info">
        <Title text="Speakers wanted" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="If you want to give a talk or conduct a workshop, present your open source project or share a success story, the Rolling Scopes welcomes all kinds of talk proposals." />
        <Subtitle text="So don't hesitate to drop a short synopsis to RS Head " />

        <div className="name" data-testid="contact-name">
          Dzmitry Varabei
        </div>
        <div className="email">
          <EmailIcon />
          <span>rolling.scopes@gmail.com</span>
        </div>
      </div>
      <Image className="right picture" src={image} alt="speakers-wanted" />
    </div>
  </div>
);
