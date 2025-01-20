import classNames from 'classnames/bind';
import Image from 'next/image';

import contributeImage from '@/shared/assets/contribute.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { contributeOptions } from 'data';

import styles from './contribute.module.scss';

const cx = classNames.bind(styles);

export const Contribute = () => (
  <section id="contribute" className={cx('container')} data-testid="contribute">
    <div className={cx('contribute', 'content')}>
      <div className={cx('general')}>
        <article className={cx('info')}>
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
          className={cx('picture')}
          src={contributeImage}
          alt="Sloth mascot dressed in a superhero costume"
          data-testid="contribute-image"
        />
      </div>
      <div className={cx('contribute-options')}>
        {contributeOptions.map(({ id, title, description, linkLabel, href }) => (
          <article key={id} className={cx('option-item')} data-testid={`option-item-${id}`}>
            <Subtitle>{title}</Subtitle>
            <Paragraph fontSize="large">{description}</Paragraph>
            <LinkCustom href={href} variant="primary" external>
              {linkLabel}
            </LinkCustom>
          </article>
        ))}
      </div>
      <Paragraph className={cx('contribute-paragraph')}>
        Additionally, we provide feedback on LinkedIn, which can be a valuable asset for your
        professional development.
      </Paragraph>
    </div>
  </section>
);
