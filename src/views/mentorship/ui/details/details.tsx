import classnames from 'classnames/bind';
import { Language } from '@/shared/types';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { InfoCell } from '@/widgets/numbers/ui/info-cell/info-cell';
import { type MentorshipDetails, aboutMentorsData } from 'data';

import styles from './details.module.scss';

const cx = classnames.bind(styles);

type MentorshipDetailsProps = {
  description: MentorshipDetails[];
  lang?: Language;
};

export const DetailsMentorship = ({ description, lang = 'en' }: MentorshipDetailsProps) => {
  return (
    <section className={cx('details-container', 'container')}>
      <div className={cx('details-content', 'content')}>
        <WidgetTitle mods="asterisk">{aboutMentorsData[lang].header}</WidgetTitle>
        <div className={cx('details-info')}>
          {description.map(({ id, title, info }) => (
            <div key={id} className={cx('details-cell')}>
              <InfoCell title={info} description={title} isMentorship={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
