import { LINKS } from '@/app/const';
import image from '@/shared/assets/support.webp';
import { ArrowIcon } from '@/shared/icons';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './support.scss';

export const Support = () => (
  <div className="support container">
    <div className="support content">
      <div className="info">
        <WidgetTitle size="large" mods="lines">
          Support Us
        </WidgetTitle>
        <Paragraph fontSize="large">
          Your donations help us cover hosting, domains, licenses, and advertising for courses and
          events. Every donation, big or small, helps!
        </Paragraph>
        <Paragraph fontSize="large">Thank you for your support!</Paragraph>
        <LinkCustom href={LINKS.DONATE} icon={<ArrowIcon />} variant="primary" target="_blank">
          Donate now
        </LinkCustom>
      </div>
      <Image className="right picture" src={image} alt="support-us" />
    </div>
  </div>
);
