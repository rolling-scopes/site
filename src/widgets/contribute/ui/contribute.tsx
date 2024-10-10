import classNames from 'classnames/bind';
import { contributeOptions } from '../constants';
import contributeImage from '@/shared/assets/contribute.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './contribute.module.scss';

const cx = classNames.bind(styles);

export const Contribute = () => (
  <section id="contribute" className="contribute container">
    <div className="contribute content">
      <div className="general">
        <article className="info">
          <WidgetTitle mods="asterisk">How to Contribute</WidgetTitle>
          <Paragraph fontSize="large">
            Contributing to The Rolling Scopes is not only a great way to give back to the
            community, but it&apos;s also an excellent way to enhance your own knowledge.
          </Paragraph>
          <Paragraph>
            Remember, teaching others is one of the best ways to learn - this is known as The
            Protégé Effect! There are several ways you can contribute, choose yours.
          </Paragraph>
        </article>
        <Image
          className="right picture"
          src={contributeImage}
          alt="Sloth mascot dressed in a superhero costume"
        />
      </div>
      <div className="contribute-options">
        {contributeOptions.map(({ title, description, linkLabel, href }) => (
          <article key={title} className={cx('option-item')} data-testid="option-item">
            <Subtitle>{title}</Subtitle>
            <Paragraph fontSize="large">{description}</Paragraph>
            <LinkCustom href={href} variant="primary" external>
              {linkLabel}
            </LinkCustom>
          </article>
        ))}
      </div>
      <Paragraph className="contribute-paragraph">
        Additionally, we provide feedback on LinkedIn, which can be a valuable asset for your
        professional development.
      </Paragraph>
    </div>
  </section>
);
