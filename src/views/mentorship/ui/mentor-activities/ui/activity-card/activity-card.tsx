import classnames from 'classnames/bind';
import Image from 'next/image';

import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import type { MentorActivity } from 'data';

import styles from './activity-card.module.scss';

const cx = classnames.bind(styles);

type ActivityCardProps = Omit<MentorActivity, 'id'>;

export const ActivityCard = ({ title, description, icon, links }: ActivityCardProps) => (
  <article className={cx('activity-card')} data-testid="activity-card">
    <div className={cx('icon')}>
      <div className={cx('icon-accent')}></div>
      <Image src={icon} alt="" data-testid="activity-card-icon" />
    </div>
    <Subtitle className={cx('card-title')} fontSize="large" fontWeight="bold">
      {title}
    </Subtitle>
    <Paragraph className={cx('card-description')}>{description}</Paragraph>
    {links?.length && links.map(({ href, linkTitle }) => (
      <LinkCustom href={href} key={linkTitle} data-testid="activity-card-link" highContrast>
        {linkTitle}
      </LinkCustom>
    ))}
  </article>
);
