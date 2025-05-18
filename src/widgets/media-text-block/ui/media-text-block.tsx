import classNames from 'classnames/bind';
import Image from 'next/image';

import { MediaTextBlockSectionData } from '@/entities/course/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './media-text-block.module.scss';

type MediaTextBlockProps = MediaTextBlockSectionData & {
  enrollUrl: string | null;
};

const cx = classNames.bind(styles);

export const MediaTextBlock = async ({
  enrollUrl,
  title,
  content,
  image,
  isImageOnLeft,
  registrationLinkText,
  registrationClosedLinkText,
}: MediaTextBlockProps) => {
  const linkText = enrollUrl ? registrationLinkText : registrationClosedLinkText;
  const enrollHref = enrollUrl ?? '';
  const isLinkDisabled = !enrollUrl;

  return (
    <section className={cx('media-text-block', 'container')}>
      <div className={cx('media-text-block', 'content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>

        <div className={cx('content-wrapper', { 'image-on-right': !isImageOnLeft })}>
          {image && <Image className={cx('image')} src={image} alt="" />}
          <div className={cx('text-content')}>{content}</div>
        </div>

        {linkText && (
          <LinkCustom href={enrollHref} variant="primary" external disabled={isLinkDisabled}>
            {linkText}
          </LinkCustom>
        )}
      </div>
    </section>
  );
};
