import classNames from 'classnames/bind';
import { LINKS } from '@/app/const';
import image from '@/shared/assets/merch.webp';
import { ArrowIcon } from '@/shared/icons';
import Image from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title/widget-title';

import styles from './merch.module.scss';

const cx = classNames.bind(styles);

export const Merch = () => (
  <div id="merch" className={cx('container')}>
    <div className={cx('content', 'merch', 'column-2')}>
      <div className={cx('info')}>
        <SectionLabel label="merch" />
        <WidgetTitle size="medium" mods="asterisk">RS merch</WidgetTitle>
        <Subtitle text="Are you an RS sloth fan and looking for RS merch?" />
        <Paragraph>
          The wait is almost over as we&apos;re gearing up for the catalog of free web and print
          assets where you will find all merch collections and can print your own Rolling Scopes
          t-shirts, stickers etc.
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
      <Image className={cx('right', 'picture')} src={image} alt="speakers-wanted" />
    </div>
  </div>
);
