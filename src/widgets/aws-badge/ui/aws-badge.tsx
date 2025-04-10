import classNames from 'classnames/bind';
import Image from 'next/image';

import imageAws from '@/shared/assets/aws-cloud-pract-badge.webp';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './aws-badge.module.scss';

export const cx = classNames.bind(styles);

export const AwsBadge = () => {
  return (
    <section
      className={cx('aws-badge', 'container')}
      data-testid="aws-badge"
    >
      <div className={cx('aws-badge', 'content', 'column-2')}>
        <article className={cx('aws-info')}>
          <SectionLabel>AWS Certification</SectionLabel>
          <WidgetTitle mods="asterisk">AWS DIGITAL BADGE</WidgetTitle>
          <Paragraph>
            Upon completing the course and passing the AWS Cloud Quest: Cloud Practitioner, you will
            obtain an AWS digital badge. This badge will recognize your achievement and demonstrate your
            knowledge of AWS fundamentals to potential employers or clients. By the end of the course,
            you will have gained a solid foundation in AWS fundamentals and be prepared to pass the AWS
            Cloud Practitioner certification.
          </Paragraph>
        </article>
        <Image
          className={cx('aws-badge-img')}
          src={imageAws}
          alt="AWS Digital Badge"
          data-testid="aws-badge-img"
        />
      </div>
    </section>
  );
};
