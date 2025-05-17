import classNames from 'classnames/bind';
import Image from 'next/image';

import { CommunicationSectionData } from '@/entities/course/types';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './communication.module.scss';

const cx = classNames.bind(styles);

type CommunicationSectionProps = CommunicationSectionData;

export const CommunicationSection = async ({
  title,
  content,
  image,
}: CommunicationSectionProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-wrapper')}>
          <figure className={cx('discord-logo-wrapper')}>
            <Image src={image} alt="discord logo" />
          </figure>
          <div>{content}</div>
        </div>
      </article>
    </section>
  );
};
