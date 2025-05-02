import classNames from 'classnames/bind';
import Image from 'next/image';

import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { awsBadgeMap } from 'data';

import styles from './aws-badge.module.scss';

export const cx = classNames.bind(styles);

type AwsBadgeProps = {
  courseName: keyof typeof awsBadgeMap;
};
export const AwsBadge = ({ courseName }: AwsBadgeProps) => {
  const { title, image, label, description } = awsBadgeMap[courseName];

  return (
    <section className={cx('aws-badge', 'container')} data-testid="aws-badge">
      <div className={cx('aws-badge', 'content', 'column-2')}>
        <article className={cx('aws-info')}>
          <SectionLabel>{label}</SectionLabel>
          <WidgetTitle mods="asterisk">{title}</WidgetTitle>
          <Paragraph>{description}</Paragraph>
        </article>
        <Image
          className={cx('aws-badge-img')}
          src={image}
          alt="AWS Digital Badge"
          data-testid="aws-badge-img"
        />
      </div>
    </section>
  );
};
