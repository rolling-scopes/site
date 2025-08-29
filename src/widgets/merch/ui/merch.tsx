import classNames from 'classnames/bind';
import Image from 'next/image';

import rsSchoolMerchImage from '@/shared/assets/merch.webp';
import { LINKS } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { merchData } from 'data';

import styles from './merch.module.scss';

const cx = classNames.bind(styles);

export const Merch = () => (
  <section id="merch" className={cx('container')}>
    <div className={cx('content', 'merch', 'column-2')}>
      <article className={cx('info')}>
        <SectionLabel>{merchData.label}</SectionLabel>
        <WidgetTitle mods="asterisk">{merchData.title}</WidgetTitle>
        <Paragraph fontSize="large">{merchData.mainParagraph}</Paragraph>
        <Paragraph>{merchData.description}</Paragraph>
        <LinkCustom href={LINKS.MERCH} variant="primary">
          {merchData.linkTitle}
        </LinkCustom>
      </article>
      <Image
        className={cx('image')}
        src={rsSchoolMerchImage}
        alt="A collage of photos with branded T-shirts, cups, and stickers featuring the RSSchool logo"
        data-testid="collage-with-merch"
      />
    </div>
  </section>
);
