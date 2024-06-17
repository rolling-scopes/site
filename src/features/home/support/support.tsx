import { LINKS } from '@/app/const';
import Image from '@/features/image';
import { ArrowIcon } from '@/icons';
import image from '@/shared/assets/support.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title, TitleType } from '@/shared/ui/title';

import './support.scss';

export const Support = () => (
  <div className="support container">
    <div className="support content">
      <div className="info">
        <Title text="Support Us" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Every donation, big or small, helps!" />
        <Subtitle text="Thank you for your support!" />
        <LinkCustom
          href={LINKS.DONATE}
          icon={<ArrowIcon />}
          variant="colored"
          button
          target="_blank"
        >
          Donate now
        </LinkCustom>
      </div>
      <Image className="right picture" src={image} alt="support-us" />
    </div>
  </div>
);
