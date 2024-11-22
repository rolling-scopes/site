import classNames from 'classnames/bind';
import Image from 'next/image';
import { LINKS } from '@/core/const';
import rsSchoolMerchImage from '@/shared/assets/merch.webp';
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
        <LinkCustom href={LINKS.MERCH} variant="primary" external>{merchData.linkTitle}</LinkCustom>
      </article>
      <Image className={cx('image')} src={rsSchoolMerchImage} alt="RS School merch" />
    </div>
  </section>
);
