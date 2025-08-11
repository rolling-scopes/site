import classNames from 'classnames/bind';

import { MediaTextBlockSectionData } from '../types';
import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { LinkCustom } from '@/shared/ui/link-custom';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  isSectionComponentsList,
} from '@/widgets/media-text-block/helpers/is-section-components-list';

import styles from './media-text-block.module.scss';

type MediaTextBlockProps = MediaTextBlockSectionData;

const cx = classNames.bind(styles);

export const MediaTextBlock = async ({
  anchorId,
  imageAbsolutePosition,
  title,
  titleSize,
  titleMod,
  sectionLabel,
  contentLeft,
  contentRight,
  contentBottom,
  linkUrl,
  linkLabel,
  disabledLinkLabel,
  backgroundColor,
  embedded = false,
}: MediaTextBlockProps) => {
  const linkText = linkUrl ? linkLabel : disabledLinkLabel;
  const href = linkUrl ?? '';
  const isLinkDisabled = !linkUrl;
  const isLinkShown = (href && Boolean(linkLabel)) || (!href && Boolean(disabledLinkLabel));
  const small = titleSize === 'smallest';
  const isComponentList = isSectionComponentsList(contentLeft);

  return (
    <section
      id={anchorId}
      className={cx('media-text-block', 'container', { 'image-absolute-position': imageAbsolutePosition })}
      style={{ backgroundColor }}
    >
      <div
        className={cx('inner', 'content', {
          embedded,
          small,
        })}
      >
        <div className={cx('title')}>
          {sectionLabel && <SectionLabel>{sectionLabel}</SectionLabel>}

          {title && (
            <WidgetTitle size={titleSize} mods={titleMod}>
              {title}
            </WidgetTitle>
          )}
        </div>

        <div className={cx('content-wrapper-left', { 'component-list': isComponentList })}>
          {contentLeft && (
            <div className={cx('content-wrapper')}>
              {imageAbsolutePosition && <div className={cx('absolute-image-placeholder')} />}
              {contentLeft}
            </div>
          )}

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

      {contentBottom && <div className={cx('content-bottom', 'content')}>{contentBottom}</div>}
    </section>
  );
};
