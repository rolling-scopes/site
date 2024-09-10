import classNames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './about-school.module.scss';

export const cx = classNames.bind(styles);

export const AboutSchool = () => {
  return (
    <section id="about-school" className={cx('about-school', 'container')} data-testid="about-school">
      <article className={cx('about-school', 'content')}>
        <WidgetTitle mods="asterisk">About RS School</WidgetTitle>
        <Paragraph fontSize="large">
          No matter your age, professional employment, or place of residence.
        </Paragraph>
        <Paragraph>
          RS School offers a unique learning experience as a&#160;free, community-based online
          education initiative. The RS&#160;School has been run by the Rolling&#160;Scopes
          community since&#160;2013. Today, over 600&#160;developer-volunteers from various
          countries and companies assist as mentors.
          We believe in important ideas that guide our mission.
        </Paragraph>
      </article>
    </section>
  );
};
