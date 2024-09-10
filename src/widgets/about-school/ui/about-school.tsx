import classNames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './about-school.module.scss';

export const cx = classNames.bind(styles);

export const AboutSchool = () => {
  return (
    <div id="about" className={cx('rs-about container')}>
      <div className={cx('rs-about content')}>
        <div className={cx('column-2')}>
          <div className={cx('info')}>
            <WidgetTitle mods="asterisk">About RS School</WidgetTitle>
            <Paragraph fontSize="large">
              No matter your age, professional employment, or place of residence.
            </Paragraph>
            <Paragraph>
              RS School offers a unique learning experience as a free, community-based online
              education initiative. The RS School has been run by the Rolling Scopes community since
              2013. Today, over 600 developer-volunteers from various countries and companies assist
              as mentors. We believe in important ideas that guide our mission.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};
