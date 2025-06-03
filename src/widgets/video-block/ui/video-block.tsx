import classNames from 'classnames/bind';

import { WidgetTitle } from '@/shared/ui/widget-title';
import { VideoBlockSectionData } from '@/widgets/video-block/types';

import styles from './video-block.module.scss';

const cx = classNames.bind(styles);

type VideoBlockProps = VideoBlockSectionData;

export const VideoBlock = ({ title, url, videoTitle }: VideoBlockProps) => {
  return (
    <section className={cx('container')} data-testid="video-block">
      <article className={cx('content')}>
        <WidgetTitle mods="lines">{title}</WidgetTitle>
        <div className={cx('video-wrapper')}>
          <div className={cx('video-container', 'hide-in-percy')}>
            <iframe
              className={cx('video-frame')}
              loading="lazy"
              title={videoTitle}
              src={url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </article>
    </section>
  );
};
