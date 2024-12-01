import classNames from 'classnames/bind';
import Image from 'next/image';
import { LINKS } from '@/core/const';
import image from '@/shared/assets/support.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './support.module.scss';

const cx = classNames.bind(styles);

export const Support = () => (
  <div className={cx('support-container', 'container')}>
    <div className={cx('support-content', 'content')}>
      <div className={cx('support-info')}>
        <WidgetTitle size="large" mods="lines">
          Support Us
        </WidgetTitle>
        <Paragraph fontSize="large">
          Your donations help us cover hosting, domains, licenses, and advertising for courses and
          events. Every donation, big or small, helps!
        </Paragraph>
        <Paragraph fontSize="large">Thank you for your support!</Paragraph>
        <LinkCustom className={cx('support-link')} href={LINKS.DONATE} variant="primary" external>
          Donate now
        </LinkCustom>
      </div>
      <Image className={cx('right', 'support-picture')} src={image} alt="support-us" />
    </div>
  </div>
);
