import classNames from 'classnames/bind';

import { CertificationSectionData } from '@/entities/course/types';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './certification.module.scss';

const cx = classNames.bind(styles);

export const CertificationSection = ({ title, content }: CertificationSectionData) => {
  return (
    <section className={cx('certification', 'container')}>
      <article className={cx('certification', 'content', 'info-wrapper')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('paragraphs-wrapper')}>{content}</div>
      </article>
    </section>
  );
};
