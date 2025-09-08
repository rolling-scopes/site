import classNames from 'classnames/bind';
import Image from 'next/image';

import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { SupportUsSectionData } from '@/widgets/support/types';

import styles from './support.module.scss';

const cx = classNames.bind(styles);

export const Support = ({
  title,
  imageSrc,
  linkLabelRight,
  linkLabelLeft,
  linkUrlLeft,
  linkUrlRight,
  content,
  linkIconRight,
  linkIconLeft,
}: SupportUsSectionData) => (
  <section
    className={cx('support-container', 'container')}
    data-testid="support-section"
    id="donate"
  >
    <div className={cx('support-content', 'content', 'column-2')}>
      <article className={cx('support-info')}>
        <WidgetTitle size="large" mods="lines">
          {title}
        </WidgetTitle>

        {content}

        <div className={cx('donate-options')}>
          <div className={cx('donate-item')}>
            <LinkCustom href={linkUrlLeft} variant="primary" external data-testid="link-donate">
              <Image
                width={24}
                height={24}
                src={linkIconLeft}
                alt=""
                aria-hidden="true"
              />

              {linkLabelLeft}
            </LinkCustom>
          </div>

          <div className={cx('donate-item')}>
            <LinkCustom href={linkUrlRight} variant="primary" external data-testid="link-donate">
              <Image
                width={24}
                height={24}
                src={linkIconRight}
                alt=""
                aria-hidden="true"
              />

              {linkLabelRight}
            </LinkCustom>
          </div>
        </div>
      </article>

      {imageSrc && (
        <Image
          className={cx('sloth-mascot')}
          src={imageSrc}
          alt=""
          aria-hidden="true"
          data-testid="sloth-mascot"
        />
      )}
    </div>
  </section>
);
