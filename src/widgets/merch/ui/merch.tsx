import classNames from 'classnames/bind';
import Image from 'next/image';
import { LINKS } from '@/core/const';
import image from '@/shared/assets/merch.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';

import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './merch.module.scss';

const cx = classNames.bind(styles);

export const Merch = () => (
  <div id="merch" className={cx('container')}>
    <div className={cx('content', 'merch', 'column-2')}>
      <div className={cx('info')}>
        <SectionLabel>merch</SectionLabel>
        <WidgetTitle mods="asterisk">RS merch</WidgetTitle>
        <Paragraph fontSize="large">Are you an RS sloth fan and looking for RS merch?</Paragraph>
        <Paragraph>
          The wait is almost over as we&apos;re gearing up for the catalog of free web and print
          assets where you will find all merch collections and can print your own Rolling Scopes
          t-shirts, stickers etc.
        </Paragraph>
        <LinkCustom href={LINKS.MERCH} variant="primary" external>
          Discover merch assets
        </LinkCustom>
      </div>
      <Image className={cx('right', 'picture')} src={image} alt="speakers-wanted" />
    </div>
  </div>
);
