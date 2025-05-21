import classNames from 'classnames/bind';

import { MediaTextBlockSectionData } from '@/entities/course/types';
import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './media-text-block.module.scss';

type MediaTextBlockProps = MediaTextBlockSectionData;

const cx = classNames.bind(styles);

export const MediaTextBlock = async ({
  title,
  contentLeft,
  contentRight,
  linkUrl,
  linkLabel,
  disabledLinkLabel,
  backgroundColor,
}: MediaTextBlockProps) => {
  const linkText = linkUrl ? linkLabel : disabledLinkLabel;
  const href = linkUrl ?? '';
  const isLinkDisabled = !linkUrl;
  const isLinkShown = (href && Boolean(linkLabel)) || (!href && Boolean(disabledLinkLabel));

  return (
    <section className={cx('media-text-block', 'container')} style={{ backgroundColor }}>
      <div className={cx('inner', 'content')}>
        <WidgetTitle className={cx('title')} mods="asterisk">
          {title}
        </WidgetTitle>

        <div className={cx('content-wrapper-left')}>
          {contentLeft && <div className={cx('content-wrapper')}>{contentLeft}</div>}

          {isLinkShown && (
            <LinkCustom
              href={href}
              variant="primary"
              external={isExternalUri(href)}
              disabled={isLinkDisabled}
            >
              {linkText}
            </LinkCustom>
          )}
        </div>

        {contentRight && (
          <div className={cx('content-wrapper', 'content-wrapper-right')}>{contentRight}</div>
        )}
      </div>
    </section>
  );
};
