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

export const MediaTextBlock = ({
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
  width,
  embedded = false,
}: MediaTextBlockProps) => {
  const linkText = linkUrl ? linkLabel : disabledLinkLabel;
  const href = linkUrl ?? '';
  const isLinkDisabled = !linkUrl;
  const isLinkShown = (href && Boolean(linkLabel)) || (!href && Boolean(disabledLinkLabel));
  const small = titleSize === 'smallest';
  const hasTitle = title || sectionLabel;
  const isComponentListContentLeft = isSectionComponentsList(contentLeft);
  const isComponentListContentBottom = isSectionComponentsList(contentBottom);

  return (
    <section
      id={anchorId}
      className={cx('media-text-block', 'container', { 'image-absolute-position': imageAbsolutePosition })}
      style={{
        backgroundColor,
        maxWidth: width,
      }}
    >
      <div
        className={cx('inner', 'content', {
          embedded,
          small,
          'with-title': hasTitle,
        })}
      >
        {hasTitle && (
          <div className={cx('title-wrapper')}>
            {sectionLabel && <SectionLabel>{sectionLabel}</SectionLabel>}

            {title && (
              <WidgetTitle size={titleSize} mods={titleMod} className={cx('title')}>
                {title}
              </WidgetTitle>
            )}
          </div>
        )}

        <div
          className={cx('content-wrapper-left', { 'component-list': isComponentListContentLeft })}
        >
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

      {contentBottom && (
        <div
          className={cx('content-bottom', 'content', { 'component-list': isComponentListContentBottom })}
        >
          {contentBottom}
        </div>
      )}
    </section>
  );
};
