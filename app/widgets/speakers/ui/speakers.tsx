import image from '@/shared/assets/speakers-wanted.webp';
import { EmailIcon } from '@/shared/icons';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './speakers.scss';

export const Speakers = () => (
  <div className="speakers container">
    <div className="speakers content">
      <div className="info">
        <WidgetTitle size="large" mods="lines">
          Speakers wanted
        </WidgetTitle>
        <Paragraph fontSize="large">
          If you want to give a talk or conduct a workshop, present your open source project or
          share a success story, the Rolling Scopes welcomes all kinds of talk proposals.
        </Paragraph>
        <Paragraph fontSize="large">
          So don&apos;t hesitate to drop a short synopsis to RS Head
        </Paragraph>

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
