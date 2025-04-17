import classNames from 'classnames/bind';
import Image from 'next/image';

import image from '@/shared/assets/support.webp';
import { BoostyIcon, OpenCollectiveIcon } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { donateOptions } from 'data';

import styles from './support.module.scss';

const cx = classNames.bind(styles);

export const renderIcon = (icon: string) => {
  switch (icon) {
    case 'openCollective':
      return <OpenCollectiveIcon />;
    case 'boosty':
      return <BoostyIcon />;
    default:
      return null;
  }
};

export const Support = () => (
  <section
    className={cx('support-container', 'container')}
    data-testid="support-section"
    id="donate"
  >
    <div className={cx('support-content', 'content', 'column-2')}>
      <article className={cx('support-info')}>
        <WidgetTitle size="large" mods="lines">
          Support Us
        </WidgetTitle>
        <Paragraph fontSize="large">
          Your donations help us cover hosting, domains, licenses, and advertising for courses and
          events. Every donation, big or small, helps!
        </Paragraph>
        <Paragraph fontSize="large">Thank you for your support!</Paragraph>
        <div className={cx('donate-options')}>
          {donateOptions.map(({ id, href, linkLabel, icon }) => (
            <div key={id} className={cx('donate-item')}>
              <LinkCustom href={href} variant="primary" external data-testid="link-donate">
                {renderIcon(icon)}
                {linkLabel}
              </LinkCustom>
            </div>
          ))}
        </div>
      </article>
      <Image
        className={cx('sloth-mascot')}
        src={image}
        alt="A sloth mascot with a piggy bank in his hands"
        data-testid="sloth-mascot"
      />
    </div>
  </section>
);
