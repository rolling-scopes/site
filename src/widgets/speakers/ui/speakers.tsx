import classNames from 'classnames/bind';
import Image from 'next/image';
import image from '@/shared/assets/speakers-wanted.webp';
import { EmailIcon } from '@/shared/icons';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './speakers.module.scss';

const cx = classNames.bind(styles);

export const Speakers = () => (
  <div className={cx('speakers', 'container')}>
    <div className={cx('speakers', 'content')}>
      <article className={cx('info')}>
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

        <Subtitle color="black" className={cx('name')}>
          Dzmitry Varabei
        </Subtitle>
        <address className={cx('email-wrapper')}>
          <EmailIcon />
          <span className={cx('email')}>rolling.scopes@gmail.com</span>
        </address>
      </article>
      <Image
        className={cx('right', 'picture')}
        src={image}
        alt="Cartoon sloth wearing a yellow shirt, gesturing with a speech bubble"
      />
    </div>
  </div>
);
