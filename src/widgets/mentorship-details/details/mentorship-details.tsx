import classnames from 'classnames/bind';

import { Language } from '@/shared/types';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { InfoCell } from '@/widgets/numbers/ui/info-cell/info-cell';
import { InfoGrid } from '@/widgets/numbers/ui/info-grid/info-grid';
import { type MentorshipsDetails, aboutMentorsData } from 'data';

import styles from './mentorship-details.module.scss';

const cx = classnames.bind(styles);

type MentorshipDetailsProps = {
  description: MentorshipsDetails[];
  lang?: Language;
};

export const MentorshipDetails = ({ description, lang = 'en' }: MentorshipDetailsProps) => {
  return (
    <section className={cx('details-container', 'container')} data-testid="details-mentorship">
      <div className={cx('details-content', 'content')}>
        <WidgetTitle mods="asterisk">{aboutMentorsData[lang].header}</WidgetTitle>
        <InfoGrid borderColor="black">
          {description.map(({ id, title, info }) => (
            <InfoCell
              key={id}
              title={info}
              description={title}
              gap="withGap"
              size="large"
            />
          ))}
        </InfoGrid>
      </div>
    </section>
  );
};
