import { LINKS } from '@/app/const';
import image from '@/assets/merch.webp';
import Image from '@/features/image';
import { ArrowIcon } from '@/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title } from '@/shared/ui/title';

import './merch.scss';

export const Merch = () => (
  <div id="merch" className="merch container">
    <div className="merch content column-2">
      <div className="info">
        <SectionLabel label="merch" />
        <Title text="RS merch" hasAsterisk />
        <Subtitle text="Are you an RS sloth fan and looking for RS merch?" />
        <Paragraph>
          The wait is almost over as we&apos;re gearing up for the catalog of free web and print assets
          where you will find all merch collections and can print your own Rolling Scopes t-shirts,
          stickers etc.
        </Paragraph>
        <LinkCustom
          href={LINKS.MERCH}
          icon={<ArrowIcon />}
          button
          variant="colored"
          target="_blank"
        >
          Discover merch assets
        </LinkCustom>
      </div>
      <Image className="right picture" src={image} alt="speakers-wanted" />
    </div>
  </div>
);
