import classNames from 'classnames/bind';
import Image from 'next/image';
import image from '@/shared/assets/speakers-wanted.webp';
import { EmailIcon } from '@/shared/icons';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './speakers.module.scss';

const cx = classNames.bind(styles);

export const Speakers = () => (
  <div className={cx('speakers', 'container')}>
    <div className={cx('speakers', 'content')}>
      <div className={cx('info')}>
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

        <div className={cx('name')} data-testid="contact-name">
          Dzmitry Varabei
        </div>
        <div className={cx('email-wrapper')}>
          <EmailIcon />
          <span className={cx('email')}>rolling.scopes@gmail.com</span>
        </div>
      </div>
      <Image className={cx('right', 'picture')} src={image} alt="speakers-wanted" />
    </div>
  </div>
);
