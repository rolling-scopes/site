import classNames from 'classnames/bind';
import imageAbout from '@/shared/assets/about.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './about-community.module.scss';

export const cx = classNames.bind(styles);

export const AboutCommunity = () => {
  return (
    <section className={cx('about-community', 'container')} id="about-community" data-testid="about-community">
      <div className={cx('about-community', 'content', 'column-2')}>
        <article className={cx('about-info')}>
          <SectionLabel>community</SectionLabel>
          <WidgetTitle mods="asterisk">Who we are</WidgetTitle>
          <Paragraph fontSize="large">
            Our mission is to provide free education in intriguing subjects, connect people, and
            grow together.
          </Paragraph>
          <Paragraph>
            The Rolling Scopes was founded in 2013 in Minsk as a community of Front-end developers.
            It has since grown into an enormous international developers community.
          </Paragraph>
          <Paragraph>
            The Rolling Scopes brings together developers of all levels who are passionate about
            technologies such as JavaScript, Front-end development, AWS, and more. Currently, many
            developers around the world recognize The Rolling Scopes for its community-based
            education program, RS School, along with fascinating events and its groovy mascot,
            Sloth.
          </Paragraph>
        </article>
        <Image src={imageAbout} alt="Community Hero" />
      </div>
    </section>
  );
};
