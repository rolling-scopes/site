import cx from 'classnames';
import { ANCHORS } from '@/core/const';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

export const AboutSchool = () => {
  return (
    <section
      className={cx('about-school', 'container')}
      id={ANCHORS.ABOUT_SCHOOL}
      data-testid="about-school"
    >
      <article className={cx('content')}>
        <WidgetTitle mods="asterisk">About RS School</WidgetTitle>
        <Paragraph fontSize="large">
          TESTING SCREENSHOTS 5555555 No matter your age, professional employment, or place of residence.
        </Paragraph>
        <Paragraph>
          RS School offers a unique learning experience as a&#160;free, community-based online
          education initiative. The RS&#160;School has been run by the Rolling&#160;Scopes community
          since&#160;2013. Today, over 600&#160;developer-volunteers from various countries and
          companies assist as mentors. We believe in important ideas that guide our mission.
        </Paragraph>
      </article>
    </section>
  );
};
