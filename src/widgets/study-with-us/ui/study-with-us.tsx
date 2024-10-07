import classNames from 'classnames/bind';
import { studyOptions } from '../constants';
import rsSchool from '@/shared/assets/rs-school.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './study-with-us.module.scss';

const cx = classNames.bind(styles);

export const StudyWithUs = () => (
  <section className="container" data-testid="study-with-us">
    <div className={cx('content', 'study-with-us')}>
      <div className={cx('study-wrap')}>
        <article className={cx('study-description')}>
          <SectionLabel>education</SectionLabel>
          <WidgetTitle mods="asterisk">Study with RS School</WidgetTitle>
          <Paragraph fontSize="large">
            RS School is a free and community-based online education program conducted by The
            Rolling Scopes Community since 2013.
          </Paragraph>
          <Paragraph>
            Currently 500+ developers from different countries and companies involve in the
            education process as mentors.
          </Paragraph>
        </article>
        <Image
          data-testid="study-image"
          className={cx('sloth-mascot')}
          img={rsSchool}
          alt="Sloth - mascot in glasses and works at a laptop"
        />
      </div>
      <div className={cx('study-options')}>
        {studyOptions.map((studyOption) => (
          <article key={studyOption.title} className={cx('option-item')} data-testid="option-item">
            <Subtitle>{studyOption.title}</Subtitle>
            <Paragraph>{studyOption.description}</Paragraph>
          </article>
        ))}
      </div>
    </div>
  </section>
);
